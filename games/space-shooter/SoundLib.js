SoundLib = function(){
	this.sons = {};
	this.ativo= {};
	this.canais = [];
	for (var i = 0 ; i < 5; i++) {
		this.canais[i] = {
			audio: new Audio(),
			fim: -1
		}
	};

	this.load = function(nome, src){
		this.sons[nome] = new Audio(src);
		this.sons[nome].load();
	};

	this.play = function(nome, duracao){
		if(this.ativo[nome]) return;
		this.ativo[nome] = true;
		if(duracao){
			setTimeout(
				(function (that){
					return function(){
						that.ativo[nome] = false;
					}
				})(this), duracao);
		}
		var agora = new Date();
		for(i = 0; i < 5; i++){
			var canal = this.canais[i];
			

		}
	};

}