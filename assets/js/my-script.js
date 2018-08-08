(function ($) {
    "use strict"

    var userInteracted = false;

    const video = $('#movVideo')[0];

    const fadeInVideo = function () {
        var e = document.getElementById("movVideo");
        e.setAttribute('src', '../../assets/img/video2.mov');
        e.style.opacity = '0';

        $('#movVideo')[0].play();
        $('#movVideo').attr('loop', 'loop');
        $('#movVideo').prop('muted', 'muted');

        var timer = setTimeout(function () {
            var ee = document.getElementById('movVideo');
            fade(ee);
            clearTimeout(timer);
        }, 500);
    }


    const fade = function (element) {
        var op = 0;
        var timer = setInterval(function () {
            if (op >= 1) clearInterval(timer);
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1 || 0.1;
        }, 100);
    }

    const initVideos = function () {
        var video = $('#movVideo')[0];

        if (video.paused && !document.hidden) {
            try {
                video.play();
                
            } catch (error) {
                console.log("User doesn't interacted!", error);
            }
            var event3 = $('#movVideo').on('timeupdate', function () {
                if(this.currentTime >= 10.9) {
                    $('.home-content').show("pulsate", {}, 500, function () { });
                    $('.navbar').show("pulsate", {}, 500, function () { });
                }
            });

            var event = $('#movVideo').on('ended', function () {
                fadeInVideo();
                event.off();
                event3.off();
                // enableScroll()
            });
        }
    }

    const intervalVideoInit = setInterval(() => {
        if (userInteracted) {
            if (video.currentTime == 0) {
                initVideos();
            } else {
                clearInterval(intervalVideoInit);
            }
        }
    }, 500);

    const disableScroll = function () {
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
    }

    const enableScroll = function () {
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    }

    var resetEnable = true;
    var animateEnable = true;

    const resetSkillBars = function () {
        if (resetEnable) {
            $('.skillbar').each(function () {
                $(this).find('.skillbar-bar').css({
                    width: '0'
                });
            });
            resetEnable = false;
            animateEnable = true;
        }
    }

    const animateSkillBar = function () {
        if (animateEnable) {
            $('.skillbar').each(function () {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 6000);
            });

            animateEnable = false;
            setTimeout(() => {
                resetEnable = true;
            }, 7000)
        }
    }

    $(document).ready(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        // disableScroll();
        $('.home-content').hide();
        $('.navbar').hide();
        $("#myModal2").modal('show');
        $('#myModal2').on('hidden.bs.modal', function () {
            userInteracted = true;
        })

        $(window).scroll(function () {
            var elementName = $('.skillbar').last();
            var top_of_element = $(elementName).offset().top;
            var bottom_of_element = $(elementName).offset().top + $(elementName).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                // The element is visible, do something
                animateSkillBar();
            } else {
                // The element is not visible, do something else
                resetSkillBars();
            }
        });

        setupCompetenciaCarousel();
    });

    const setupCompetenciaCarousel = function() {
        var myowl = $('#competencia-loop').owlCarousel({
            loop:true,
            // autoPlaySpeed: 20000,
            // dotsSpeed: 20000,
            // smartSpeed: 20000,
            // fluidSpeed: 20000,
            navSpeed: 8000,
            autoplayTimeout: 8000,
            items:1,
            margin:15,
            nav: true,
            navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            dots : true,
            autoplay : true,
            animateOut: 'fadeOut',
            autoplayHoverPause: true
        });
        // Listen to owl events:
        myowl.on('changed.owl.carousel', function(event) {
            resetSkillBars();
            animateSkillBar();
        })
    }





})(jQuery)