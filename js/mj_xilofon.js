/**
 * Created with JetBrains WebStorm.
 * User: alfonso
 * Date: 18/09/13
 * Time: 11:26
 * To change this template use File | Settings | File Templates.
 */



Xilofon=new function(){

    var amplada=960;
    var alzada=1440;

    var BASE;
    var base_instruc;
    var boto_cancel;
    var escoltaFrame;
    var et_tocaFrame;

    var secuencia;// array de nums
    var miSecuencia;/// array de strings (teclas.name)
    var interval;
    var numNota;
    var TEC_1,TEC_1press, TEC_2, TEC_2press, TEC_3, TEC_3press, TEC_4, TEC_4press, TEC_5,TEC_5press, TEC_6, TEC_6press;
    var teclas=[TEC_1,TEC_1press, TEC_2, TEC_2press, TEC_3, TEC_3press, TEC_4, TEC_4press, TEC_5,TEC_5press, TEC_6, TEC_6press];
    var teclasNames=[ "TEC_1","TEC_1press","TEC_2","TEC_2press","TEC_3","TEC_3press","TEC_4","TEC_4press","TEC_5","TEC_5press","TEC_6","TEC_6press"];

    var pantallaOK;
    var pantallaERROR;
    var boto_tornar;
    var bt_rebiri;
    var BOTO_JUGA;

    var nivell;
    var timeouts = [];
    var marge;
    var fora;

    this.initMenu=function(){

        stage.removeAllChildren();

        createjs.Ticker.removeEventListener("tick", Main.handlerTick);
        stage.removeEventListener('stagemousedown', Main.handlerTick) ;

       // InfoGame.emoticJoc = smileyJOC ;
        //InfoGame.emoticCuina = smileyMENJA;
        //InfoGame.emoticBany = smileyDUTXA;
        //InfoGame.emoticDorm = smileyDORM;

        marge=30/RESOLUTION;
        this.createFons();
       // this.createInstruccions();
        fora = false;
        createjs.Ticker.addEventListener("tick", Xilofon.handleTemps);

    };

    this.handleTemps=function(){

        stage.update();
    };

    this.createFons= function(){


        if( BASE == null || BASE == undefined )
        {
            BASE = new createjs.Bitmap(imatges['img2']);
            BASE.x = 0;
            BASE.y = 0;
            BASE.scaleY=.5;
            BASE.scaleX=.5;
            BASE.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(BASE);

    };

    this.createInstruccions = function() {

        if( base_instruc == null || base_instruc == undefined )
        {
            base_instruc = new createjs.Bitmap(imatges['xelofon_instruc']);
            base_instruc.x = 0;
            base_instruc.y = 0;
            base_instruc.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
        }

        stage.addChild(base_instruc);

        boto_cancel = new createjs.Bitmap(imatges['cancel_xelofon']);
        boto_cancel.x =  720/RESOLUTION;
        boto_cancel.y =94/RESOLUTION;
        boto_cancel.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);

        boto_cancel.addEventListener('click',  Xilofon.handlerCancel);
        stage.addChild(boto_cancel);

        if( BOTO_JUGA == null || BOTO_JUGA == undefined )
        {
            BOTO_JUGA = new createjs.Bitmap(imatges['juga_disfressa']);
            BOTO_JUGA.x = 0;// 960/RESOLUTION-200/RESOLUTION;
            BOTO_JUGA.y = 0;//s120/RESOLUTION;
           // BOTO_JUGA.scaleX=BOTO_JUGA.scaleY=1/RESOLUTION;
            BOTO_JUGA.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
        }
        BOTO_JUGA.addEventListener('click',  Xilofon.handlerJUGA);
        stage.addChild(BOTO_JUGA);
    };

    this.handlerCancel=function(){
        stage.removeAllChildren();
        clearInterval(interval);
        for (var i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i]);
        }
        timeouts = [];
        fora = true;
        createjs.Ticker.removeEventListener("tick",Xilofon.handleTemps);
        Main.InitGame();
    }

    this.handlerJUGA=function(){

        //stage.removeChild(boto_cancel);
        Xilofon.ponTeclas();

        boto_cancel.x =  960/RESOLUTION-200/RESOLUTION;
        boto_cancel.y = 20/RESOLUTION;

        stage.removeChild(BOTO_JUGA);
        stage.removeChild(base_instruc);
        //XILOFON.createMiniJoc();
        Xilofon.ferPartida();
    };

    this.ferPartida=function(){
        secuencia=dameSecuencia();
        nivell=0;
        miSecuencia=[];
        if(!fora) Xilofon.escolta();
    }


    this.escolta=function(){
        if( escoltaFrame == null || escoltaFrame == undefined )
        {
            escoltaFrame = new createjs.Bitmap(imatges['escoltaFrame']);
            escoltaFrame.x =  0;
            escoltaFrame.y = 0;
            escoltaFrame.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
        }
        stage.addChild(escoltaFrame);

        if(!fora) timeouts.push(  setTimeout(Xilofon.comenzar,1000));

    };

    this.comenzar=function(){
        stage.removeChild(escoltaFrame);
        if(!fora) Xilofon.suena();
    }

    this.suena=function(){
        numNota=0;
        if(!fora) interval=setInterval(Xilofon.toca,700);
    };

    this.toca=function(){
        if(!fora)
        {
            timeouts.push( setTimeout(Xilofon.ilumina,50));
            timeouts.push( setTimeout(Xilofon.apaga,500));
        }
    };

    this.ilumina=function(){

        teclas[secuencia[numNota]*2].visible=false;
        teclas[secuencia[numNota]*2+1].visible=true;

        if(!fora) Xilofon.produceSo(secuencia[numNota]);
    };

    this.apaga=function(){

        teclas[secuencia[numNota]*2].visible=true;
        teclas[secuencia[numNota]*2+1].visible=false;

        if(numNota>=nivell){////////////////////////////////////////   acaba la secuencia i li toca al jugador

            clearInterval(interval);
            numNota=0;
            if(!fora) Xilofon.araTu();
        }else{
            numNota++;
        }
    };

    this.araTu=function(){   /// circle et_toca apareix

        if( et_tocaFrame == null || et_tocaFrame == undefined )
        {
            et_tocaFrame = new createjs.Bitmap(imatges['et_tocaFrame']);
            et_tocaFrame.x =  0;
            et_tocaFrame.y = 0;
            et_tocaFrame.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
        }
        stage.addChild(et_tocaFrame);

        if(!fora) timeouts.push(  setTimeout(Xilofon.usuariToca,1000));

    };

    this.usuariToca=function(){  // borro circle et_toca y espero

        miSecuencia=[];
        stage.removeChild(et_tocaFrame);
        for(var i=0;i<6;i++){
            teclas[i*2].addEventListener('click', Xilofon.onTap);//les pongo el clic para poder tocar
        }

    };

    this.onTap=function(event){ // usuari pulsa teclas
        if(!fora)  Xilofon.produceSo(event.target.name.substring(4)-1);

        event.target.visible=false;
        teclas[teclas.indexOf(event.target)+1].visible=true;
        timeouts.push( setTimeout(function(){Xilofon.fiSoTecla(event.target)},500));

        miSecuencia.push(event.target.name);

        if(miSecuencia.length>nivell){
            timeouts.push(  setTimeout(Xilofon.comprova,1000));
        }

    };

    this.fiSoTecla=function(t){

        teclas[teclas.indexOf(t)+1].visible=false;
        teclas[teclas.indexOf(t)].visible=true;

    };

    this.comprova=function(){

        for(var j=0;j<6;j++){
            teclas[j*2].removeEventListener('click', Xilofon.onTap);//les quito el clic
        }

        for(var i=0;i<=nivell;i++){
           // console.log("comprovo "+i+" name "+ miSecuencia[i] + " teclas "+teclas[secuencia[i]*2].name);
            if(miSecuencia[i]!=teclas[secuencia[i]*2].name){
                if(!fora) Xilofon.donaError();
                return
            }
        }
        if(nivell>=5){
            if(!fora)  Xilofon.moltBe();
        }else{
            nivell++;
            if(!fora) Xilofon.escolta();
        }
    };

    this.donaError=function(){
        if(!fora) Audio.sonaMEC();
        nivell=0;
        if( pantallaERROR == null || pantallaERROR == undefined )
        {
            pantallaERROR = new createjs.Bitmap(imatges['pantallaERROR']);
            pantallaERROR.x =  0;
            pantallaERROR.y = 0;
            pantallaERROR.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
        }
        stage.addChild(pantallaERROR);

        if( boto_tornar == null || boto_tornar == undefined )
        {
            boto_tornar = new createjs.Bitmap(imatges['boto_tornar']);
            boto_tornar.x =  0;
            boto_tornar.y = 0;
            boto_tornar.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
            boto_tornar.addEventListener("click", Xilofon.tornarJugar);
        }
        stage.addChild(boto_tornar);


            boto_cancel = new createjs.Bitmap(imatges['cancel_xelofon']);
            boto_cancel.x =  680/RESOLUTION;
            boto_cancel.y = 36/RESOLUTION;
            boto_cancel.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);

        boto_cancel.addEventListener('click',  Xilofon.handlerCancel);
        stage.addChild(boto_cancel);

        if( bt_rebiri == null || bt_rebiri == undefined )
        {
            bt_rebiri = new createjs.Bitmap(imatges['botobiri']);
            bt_rebiri.x = 0;
            bt_rebiri.y = 0;
            bt_rebiri.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_rebiri);
        bt_rebiri.addEventListener('click',  Xilofon.handlerCancel);

    };


    this.moltBe=function(){

        if(!fora) Audio.sonaJOC();
        InfoGame.punts += 50;
        puntuacio += 50;
        if( pantallaOK == null || pantallaOK == undefined )
        {
            pantallaOK = new createjs.Bitmap(imatges['pantallaOK']);
            pantallaOK.x =  0;
            pantallaOK.y = 0;
            pantallaOK.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
        }
        stage.addChild(pantallaOK);

        if( boto_tornar == null || boto_tornar == undefined )
        {
            boto_tornar = new createjs.Bitmap(imatges['boto_tornar']);
            boto_cancel.x =  960/RESOLUTION-200/RESOLUTION;
            boto_cancel.y = 20/RESOLUTION;
            boto_tornar.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
            boto_tornar.addEventListener("click", Xilofon.tornarJugar);
        }
        stage.addChild(boto_tornar);

            boto_cancel = new createjs.Bitmap(imatges['cancel_xelofon']);
            boto_cancel.x =  680/RESOLUTION;
            boto_cancel.y =36/RESOLUTION;
            boto_cancel.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);

        boto_cancel.addEventListener('click',  Xilofon.handlerCancel);
        stage.addChild(boto_cancel);

        if( bt_rebiri == null || bt_rebiri == undefined )
        {
            bt_rebiri = new createjs.Bitmap(imatges['botobiri']);
            bt_rebiri.x = 0;
            bt_rebiri.y = 0;
            bt_rebiri.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_rebiri);
        bt_rebiri.addEventListener('click',  Xilofon.handlerCancel);
    };

    this.tornarJugar=function(){

        stage.removeChild(boto_tornar);
        stage.removeChild(pantallaERROR);
        stage.removeChild(pantallaOK);
        stage.removeChild(bt_rebiri);
        stage.removeChild(boto_cancel);

        Xilofon.ferPartida();

    };


    this.ponTeclas=function(){

        for(var i=0;i<teclas.length;i+=2){

            if( teclas[i] == null || teclas[i] == undefined )//// teclas estáticas
            {
                teclas[i] = new createjs.Bitmap(imatges[teclasNames[i]]);
                teclas[i].x =  20/RESOLUTION + i*12/RESOLUTION;
                teclas[i].y = marge+ 180/RESOLUTION + i*100/RESOLUTION;
                teclas[i].name=teclasNames[i];
                teclas[i].cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
            }
            stage.addChild(teclas[i]);
        }

        /*for(var j=1;j<teclas.length;j+=2){

            if( teclas[j] == null || teclas[j] == undefined )///// teclas sonando
            {
                teclas[j] = new createjs.Bitmap(imatges[teclasNames[j]]);
                teclas[j].x =  (j-1)*2/RESOLUTION;
                teclas[j].y = 120/RESOLUTION + (j-1)*100/RESOLUTION;
                teclas[j].cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
            }
            teclas[j].visible=true;
            stage.addChild(teclas[j]);*/


        if( teclas[1] == null || teclas[1] == undefined )///// teclas 1 sonando
        {
            teclas[1] = new createjs.Bitmap(imatges[teclasNames[1]]);
            teclas[1].x =  0;
            teclas[1].y =marge+ 106/RESOLUTION;
            teclas[1].cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
        }
        teclas[1].visible=false;
        stage.addChild(teclas[1]);


        if( teclas[3] == null || teclas[3] == undefined )///// tecla 2 sonando
        {
            teclas[3] = new createjs.Bitmap(imatges[teclasNames[3]]);
            teclas[3].x =  0;
            teclas[3].y = marge+296/RESOLUTION;
            teclas[3].cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
        }
        teclas[3].visible=false;
        stage.addChild(teclas[3]);

        if( teclas[5] == null || teclas[5] == undefined )///// tecla 3 sonando
        {
            teclas[5] = new createjs.Bitmap(imatges[teclasNames[5]]);
            teclas[5].x =  0;
            teclas[5].y = marge+510/RESOLUTION;
            teclas[5].cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
        }
        teclas[5].visible=false;
        stage.addChild(teclas[5]);

        if( teclas[7] == null || teclas[1] == undefined )///// tecla 4 sonando
        {
            teclas[7] = new createjs.Bitmap(imatges[teclasNames[7]]);
            teclas[7].x =  0;
            teclas[7].y = marge+692/RESOLUTION;
            teclas[7].cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
        }
        teclas[7].visible=false;
        stage.addChild(teclas[7]);

        if( teclas[9] == null || teclas[1] == undefined )///// tecla 5 sonando
        {
            teclas[9] = new createjs.Bitmap(imatges[teclasNames[9]]);
            teclas[9].x =  0;
            teclas[9].y = marge+890/RESOLUTION;
            teclas[9].cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
        }
        teclas[9].visible=false;
        stage.addChild(teclas[9]);

        if( teclas[11] == null || teclas[11] == undefined )///// tecla 6 sonando
        {
            teclas[11] = new createjs.Bitmap(imatges[teclasNames[11]]);
            teclas[11].x =  0;
            teclas[11].y = marge+1120/RESOLUTION;
            teclas[11].cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
        }
        teclas[11].visible=false;
        stage.addChild(teclas[11]);

    };

    function dameSecuencia(){
        var array=[0,1,2,3,4,5];
        /// fisher-yates algorithm
        var i=array.length;
        while(i--){
            var j=Math.floor( Math.random() * (i+1) );
            var tmp=array[i];
            array[i]=array[j];
            array[j]=tmp;
        }

        return array
    }

    this.produceSo=function(nota){

        if(!fora)  Audio.sonaXILOFON(nota+1);

    }

};