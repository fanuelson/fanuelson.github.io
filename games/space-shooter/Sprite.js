function BancoDeImagens(){
this.imagens = {};
this.add = function(nome,url){
this.imagens[nome] = new Image();
this.imagens[nome].src = url;
};
this.desenhaXY = function(ctx,nome,x,y){
ctx.drawImage(this.imagens[nome],x,y);  
};
this.desenhaCompleto = function(ctx,nome,x,y,w,h,dx,dy,dw,dh){
ctx.drawImage(this.imagens[nome],x,y,w,h,dx,dy,dw,dh);  
};

};
var imagens = new BancoDeImagens();
imagens.add("ship","nave.png");
imagens.add("ship2","spritesheet.png");
imagens.add("bonus","bonus.png");


function Sprite(){
    this.x = 190;
    this.y = 270;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.w = 32;
    this.h = 32;
    this.velocidade = 0;
    this.angulo = 4.7;
    this.va = 0;
    this.forma = 1;

    this.mover = function(dt, g){
        this.angulo = this.angulo + this.va*dt;
        this.vx = Math.cos(this.angulo)*this.velocidade;
        this.vy = Math.sin(this.angulo)*this.velocidade;
        //this.ax -= 0.5*(this.vx);

        //this.vx = this.vx + this.ax*dt;
        this.x = this.x + this.vx*dt;

        //this.ay -= 0.5*(this.vy);
        //this.vy = this.vy + this.ay*dt+g*dt;
        this.y = this.y + this.vy*dt;
    };
    this.moverAliado = function(dt, g){
        this.ax -= 5*(this.vx);

        this.vx = this.vx + this.ax*dt;
        this.x = this.x + this.vx*dt;


        this.ay -= 5*(this.vy);
        this.vy = this.vy + this.ay*dt;
        this.y = this.y + this.vy*dt;
    };

    this.desenharNave = function(ctx,nomeNave,xx,yy){
        ctx.save();

        ctx.strokeStyle = "black";
        ctx.fillStyle = "rgb(250, 150, 150)";
        width = this.w * 1;
        height = this.h * 1;
        posX = this.x - width/2;
        posY = this.y - height/2;
        imagens.desenhaCompleto(ctx,nomeNave,xx,yy,30,32,posX,this.y,30,32);

        ctx.translate(this.x, this.y);
        ctx.rotate(this.angulo+Math.PI/2);

        ctx.beginPath();

        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    };
    this.desenharTiro = function(ctx,nomeNave){
        ctx.save();

        ctx.strokeStyle = "black";
        ctx.fillStyle = "rgb(250, 150, 150)";
        width = this.w * 1;
        height = this.h * 1;
        posX = this.x - width/2;
        posY = this.y - height/2;

        imagens.desenhaCompleto(ctx,nomeNave,48,90,8,8,posX,this.y,10,10);
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angulo+Math.PI/2);
        ctx.beginPath();

        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    };
    this.desenharTiroBonus = function(ctx,nomeNave){
        ctx.save();

        ctx.strokeStyle = "black";
        ctx.fillStyle = "rgb(250, 150, 150)";
        width = this.w * 1;
        height = this.h * 1;
        posX = this.x - width/2;
        posY = this.y - height/2;

        imagens.desenhaCompleto(ctx,nomeNave,23,79,10,10,posX,this.y,10,10);
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angulo+Math.PI/2);
        ctx.beginPath();

        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    };
    this.desenharTiroInimigo = function(ctx,nomeNave){
        ctx.save();

        ctx.strokeStyle = "black";
        ctx.fillStyle = "rgb(250, 150, 150)";
        width = this.w * 1;
        height = this.h * 1;
        posX = this.x - width/2;
        posY = this.y - height/2;

        imagens.desenhaCompleto(ctx,nomeNave,48,71,8,8,posX,this.y,15,15);
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angulo+Math.PI/2);
        ctx.beginPath();

        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    };

    this.desenharTiroChefao = function(ctx,nomeNave){
        ctx.save();

        ctx.strokeStyle = "black";
        ctx.fillStyle = "rgb(250, 150, 150)";
        width = this.w * 1;
        height = this.h * 1;
        posX = this.x - width/2;
        posY = this.y - height/2;

        imagens.desenhaCompleto(ctx,nomeNave,56,80,8,8,posX,this.y,15,15);
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angulo+Math.PI/2);
        ctx.beginPath();

        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    };


    this.desenharChefao = function(ctx,nomeNave,xx,yy){
        ctx.save();

        ctx.strokeStyle = "black";
        ctx.fillStyle = "rgb(250, 150, 150)";
        width = this.w * 1;
        height = this.h * 1;
        posX = this.x - width/2;
        posY = this.y - height/2;

        this.forma+=(9*dt);

        if(this.forma >= 4) this.forma = 1 ;
        imagens.desenhaCompleto(ctx,nomeNave,xx+(Math.floor(this.forma)*32),yy,30,32,posX,posY,150,150);

        ctx.translate(this.x, this.y);
        ctx.rotate(this.angulo+Math.PI/2);
        ctx.beginPath();

        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    };

    this.desenharBonus = function(ctx,nomeNave,xx,yy){
        ctx.save();

        ctx.strokeStyle = "black";
        ctx.fillStyle = "rgb(250, 150, 150)";
        width = this.w * 1;
        height = this.h * 1;
        posX = this.x - width/2;
        posY = this.y - height/2;
        this.forma+=(9*dt);

        if(this.forma >= 8) this.forma = 1 ;

        imagens.desenhaCompleto(ctx,nomeNave,xx+(Math.floor(this.forma)*32),yy,20,30,posX,this.y,20,30);

        ctx.translate(this.x, this.y);
        ctx.rotate(this.angulo+Math.PI/2);
        ctx.beginPath();

        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    };

    this.desenharAliado = function(ctx){
        imagens.desenhaXY(ctx,"ship",this.x-15,this.y-15);
    }

    this.controlar = function(t){


    };
    
    this.colidiuCom = function(alvo){
        var porcentagemTamanho = 1;
        thiswidth = this.w * porcentagemTamanho ;
        thisheight = this.h * porcentagemTamanho ;
        thisposX = this.x - (thiswidth/2);
        thisposY = this.y - (thisheight/2);

        alvowidth = alvo.w * porcentagemTamanho ;
        alvoheight = alvo.h * porcentagemTamanho ;
        alvoposX = alvo.x - alvowidth/2;
        alvoposY = alvo.y - alvoheight/2;

        if(thisposX > alvoposX+alvowidth) return false;
        if(thisposX+thiswidth < alvoposX) return false;
        if(thisposY > alvoposY+alvoheight) return false;
        if(thisposY+thisheight < alvoposY) return false;
        return true;
    };

    this.colidiuComChefe = function(alvo){
        var porcentagemTamanho = 1;
        thiswidth = this.w * porcentagemTamanho ;
        thisheight = this.h * porcentagemTamanho ;
        thisposX = this.x + (thiswidth/2);
        thisposY = this.y + (thisheight/2);

        alvowidth = alvo.w * porcentagemTamanho ;
        alvoheight = alvo.h * porcentagemTamanho ;
        alvoposX = alvo.x - alvowidth/2;
        alvoposY = alvo.y - alvoheight/2;

        if(thisposX > alvoposX+alvowidth) return false;
        if(thisposX+thiswidth < alvoposX) return false;
        if(thisposY > alvoposY+alvoheight) return false;
        if(thisposY+thisheight < alvoposY) return false;
        return true;
    };
}


