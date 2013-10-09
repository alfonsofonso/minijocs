/**
 * Created with JetBrains WebStorm.
 * User: Jordi Borrell
 * Date: 8/10/13
 * Time: 15:01
 * To change this template use File | Settings | File Templates.
 */

Busca=new function(){

    var amplada;
    var alzada;

    var ampFons;
    var alzFons;

    var nivell1,nivell2,nivell3,nivell4,nivell5;
    var base_instruc;
    var boto_cancel;

    var moltBe;
    var moltMal;
    var BOTO_JUGA;

    var marge;
    var posX,posY,prevX,prevY;
    var contenidor;
    var contenidor2;

    var iks, igrega;///

    var spriteSheet;
    var animation;
    var mansAnim;
    var data;

    var biriX;
    var biriY;

    var posicio;
    var donde;
    var arrPos;/// x, y , rotation de cadascuna dels amagatalls
    var moviment = false;
    var moviment2 = false;

    this.initMenu=function(){///////////////////////////   INIT   //////////////

        //createjs.Touch.enable(stage);
        donde=0;
        amplada=960/RESOLUTION;
        alzada=1440/RESOLUTION;
        ampFons=(2067*2)/RESOLUTION;
        alzFons=(1516*2)/RESOLUTION;

        stage.removeAllChildren();
        marge=30/RESOLUTION;

        arrPos=[[1700,1036,18],[900,776,-26],[282,1210,40],[510,714,7],[1520,600,0]];

        this.createFons();
        this.createInstruccions();

         createjs.Ticker.addEventListener("tick", Busca.handleTemps);
        //createjs.Ticker.addListener(window);
         createjs.Ticker.useRAF = true;
        //  Best Framerate targeted (60 FPS)
         /*createjs.Ticker.setFPS(20); */


    };

    this.handleTemps=function(){

        //animation.x=contenidor.x+biriX;
        // animation.y=contenidor.y+biriY;

        stage.update();
    };

    this.createFons= function(){


        contenidor= new createjs.Container();
        stage.addChild(contenidor);

        if( nivell1 == null || nivell1 == undefined )
        {
            nivell1 = new createjs.Bitmap(imatges['nivell1']);
            nivell1.x = 0;
            nivell1.y = 0;
            nivell1.cache(0, 0, ampFons,alzFons );

        }
        contenidor.addChild(nivell1);

        if( nivell2 == null || nivell2 == undefined )
        {
            nivell2 = new createjs.Bitmap(imatges['nivell2']);
            nivell2.x = 0;
            nivell2.y = 0;
            nivell2.cache(0, 0, ampFons,alzFons );

        }
        contenidor.addChild(nivell2);

        contenidor.cache(0,0,ampFons,alzFons);
        contenidor.addEventListener("mousedown", function(evt) {
            posX=evt.stageX;
            posY=evt.stageY;
            prevX=contenidor.x;
            prevY=contenidor.y;
            this.moviment = false;
            // add handlers directly to the event object:
            evt.addEventListener("mousemove", function(evt) {
                this.moviment = true;
                iks= evt.stageX-posX+prevX;
                igrega= evt.stageY-posY+prevY;

                if(igrega<(alzada-alzFons)){igrega=alzada-alzFons} else if(igrega>0){igrega=0}
                if(iks>0){iks=0}else if(iks<amplada-ampFons){iks=amplada-ampFons}
                contenidor.x =iks;
                contenidor.y =igrega;
                contenidor2.x =iks;
                contenidor2.y =igrega;
                animation.x=iks+biriX;
                animation.y=igrega+biriY;
                mansAnim.x=iks+biriX;
                mansAnim.y=igrega+biriY;
                stage.update();
            });
            evt.addEventListener("mouseup", function(evt) {
                console.log("Moviment 1: "+this.moviment);
                if( !this.moviment) Busca.clico();
                this.moviment = false;

                console.log("up") })
        });
       // contenidor.addEventListener("dblclick",Busca.clico);//clic en el escenario
    };

    this.createInstruccions = function() {

        if( base_instruc == null || base_instruc == undefined )
        {
            base_instruc = new createjs.Bitmap(imatges['instruccions_busca']);
            base_instruc.x = 0;
            base_instruc.y = 0;
            base_instruc.cache(0, 0, amplada, alzada);
        }
        stage.addChild(base_instruc);

        close_intruccions = new createjs.Bitmap(imatges['cancel_xelofon']);
        close_intruccions.x =  720/RESOLUTION;
        close_intruccions.y =94/RESOLUTION;
        close_intruccions.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);

        close_intruccions.addEventListener('click',  Busca.handlerCancel);
        stage.addChild(close_intruccions);

        if( bt_juga == null || bt_juga == undefined )
        {
            bt_juga = new createjs.Bitmap(imatges['juga_disfressa']);
            bt_juga.x = 0;
            bt_juga.y = 0;
            bt_juga.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_juga);
        bt_juga.addEventListener('click',  Busca.handlerJUGA);
    };

    this.handlerCancel=function(){
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", Busca.handleTemps);

        Main.InitGame();
    };

    this.handlerJUGA=function(){

        //stage.removeChild(boto_cancel);
        stage.removeAllChildren();
        Busca.createFons();
        Busca.ferPartida();
    };

    this.ferPartida=function(){/////////////////////////////////////////  fer partida ///

        posicio=Math.floor(Math.random()*5);
        Busca.creaBiri();
        console.log("fer partida "+posicio);
        //

        Busca.posaNivells();

    };


    this.creaBiri=function(){

        spriteSheet=null;
        mansAnim=null;
        if(spriteSheet==null||spriteSheet==undefined){
            var data = {
                images: [imatges['busca_biri']],
                frames: {width:128, height:128, count:4},
                animations: {amagat:[0], surt:[1,3,"stand",6],stand:[3]}
            };
            spriteSheet = new createjs.SpriteSheet(data);

            animation = new createjs.BitmapAnimation(spriteSheet);
            animation.gotoAndStop("amagat");
            animation.x=biriX=arrPos[posicio][0];
            animation.y=biriY=arrPos[posicio][1];
            animation.rotation=arrPos[posicio][2];
            animation.addEventListener("click",Busca.trobat);

            animation.visible=false;
        }
        if( mansAnim == null || mansAnim == undefined )
        {
            mansAnim = new createjs.Bitmap(imatges['mansAnim']);
            mansAnim.x = arrPos[posicio][0];
            mansAnim.y = arrPos[posicio][1];
            mansAnim.rotation=arrPos[posicio][2];
            mansAnim.cache(0, 0, ampFons,alzFons );
        }

    };

    this.clico=function(){
            Busca.malament();
    };

    this.trobat=function(){
        console.log("trobat!");
        animation.removeEventListener("click",Busca.trobat);
        //contenidor.removeEventListener("dblclick",Busca.clico);
       // contenidor2.removeEventListener("dblclick",Busca.clico);
        animation.gotoAndPlay("surt");
        setTimeout(Busca.aconseguit,2000);
    };


    this.aconseguit=function(){

        /*if( moltBe  == null || moltBe == undefined )
        {
            moltBe = new createjs.Bitmap(imatges['moltBe']);
            moltBe.x = 0;
            moltBe.y = 0;
            moltBe.cache(0, 0, amplada, alzada);
            moltBe.addEventListener("click",Busca.ferUnaAltrePartida);
        }
        stage.addChild(moltBe);*/
        stage.removeAllChildren();
        InfoGame.punts += 50;
        puntuacio += 50;
       // Busca.createFons();
        if( pantalla_ok == null || pantalla_ok == undefined )
        {
            pantalla_ok = new createjs.Bitmap(imatges['pantallaOK']);
            pantalla_ok.x = 0;
            pantalla_ok.y = 0;
            pantalla_ok.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(pantalla_ok);

        close_intruccions = new createjs.Bitmap(imatges['cancel_xelofon']);
        close_intruccions.x =  680/RESOLUTION;
        close_intruccions.y =36/RESOLUTION;
        close_intruccions.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);

        close_intruccions.addEventListener('click',  Busca.handlerCancel);
        stage.addChild(close_intruccions);

        if( bt_rejugar == null || bt_rejugar == undefined )
        {
            bt_rejugar = new createjs.Bitmap(imatges['boto_tornar']);
            bt_rejugar.x = 0;
            bt_rejugar.y = 0;
            bt_rejugar.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_rejugar);
        bt_rejugar.addEventListener('click',  Busca.handlerJUGA);
        if( bt_rebiri == null || bt_rebiri == undefined )
        {
            bt_rebiri = new createjs.Bitmap(imatges['botobiri']);
            bt_rebiri.x = 0;
            bt_rebiri.y = 0;
            bt_rebiri.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_rebiri);
        bt_rebiri.addEventListener('click', Busca.handlerCancel);

    };

    this.malament=function(){

       /* if( moltMal == null || moltMal == undefined )
        {
            moltMal = new createjs.Bitmap(imatges['moltMal']);
            moltMal.x = 0;// 960/RESOLUTION-200/RESOLUTION;
            moltMal.y = 0;//s120/RESOLUTION;
            moltMal.cache(0, 0, amplada, alzada);
            moltMal.addEventListener("click",Busca.ferUnaAltrePartida);
        }
        stage.addChild(moltMal);  */
        stage.removeAllChildren();
        if( pantalla_ko == null || pantalla_ko == undefined )
        {
            pantalla_ko = new createjs.Bitmap(imatges['pantallaERROR']);
            pantalla_ko.x = 0;
            pantalla_ko.y = 0;
            pantalla_ko.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(pantalla_ko);

        close_intruccions = new createjs.Bitmap(imatges['cancel_xelofon']);
        close_intruccions.x =  680/RESOLUTION;
        close_intruccions.y =36/RESOLUTION;
        close_intruccions.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);

        close_intruccions.addEventListener('click',  Busca.handlerCancel);
        stage.addChild(close_intruccions);

        if( bt_rejugar == null || bt_rejugar == undefined )
        {
            bt_rejugar = new createjs.Bitmap(imatges['boto_tornar']);
            bt_rejugar.x = 0;
            bt_rejugar.y = 0;
            bt_rejugar.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_rejugar);
        bt_rejugar.addEventListener('click',  Busca.handlerJUGA);
        if( bt_rebiri == null || bt_rebiri == undefined )
        {
            bt_rebiri = new createjs.Bitmap(imatges['botobiri']);
            bt_rebiri.x = 0;
            bt_rebiri.y = 0;
            bt_rebiri.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_rebiri);
        bt_rebiri.addEventListener('click', Busca.handlerCancel);

    };

    this.ferUnaAltrePartida=function(){

        stage.removeChild(moltBe);
        stage.removeChild(moltMal);

        stage.removeChild(contenidor2);
        stage.removeChild(animation);

        contenidor2.removeChild(mansAnim);
        donde ++;
        if(donde>=arrPos.length){donde=0}
        Busca.ferPartida();

    };

    this.posaNivells=function(){


        if(contenidor2==null ||contenidor2==undefined){
            contenidor2= new createjs.Container();

        }

       /* if(!contenidor.hasEventListener("dblclick"),Busca.clico){
            contenidor.addEventListener("dblclick",Busca.clico);
        }
        if(!contenidor2.hasEventListener("dblclick"),Busca.clico){
            contenidor2.addEventListener("dblclick",Busca.clico);
        }  */

        contenidor2.removeAllChildren();
        contenidor.removeChild(nivell3);

        if( nivell3 == null || nivell3 == undefined )
        {
            nivell3 = new createjs.Bitmap(imatges['nivell3']);
            nivell3.x = 0;
            nivell3.y = 0;
            nivell3.cache(0, 0, ampFons,alzFons );
        }

        if(posicio<3){
            console.log("lo añado");
            contenidor.addChild(nivell3);
            contenidor.cache(0,0,ampFons,alzFons);
        }else{
            contenidor2.addChild(nivell3);
        }

        if( nivell4 == null || nivell4 == undefined )
        {
            nivell4 = new createjs.Bitmap(imatges['nivell4']);
            nivell4.x = 0;
            nivell4.y = 0;
            nivell4.cache(0, 0, ampFons,alzFons );

        }
        contenidor2.addChild(nivell4);

        if( nivell5 == null || nivell2 == undefined )
        {
            nivell5 = new createjs.Bitmap(imatges['nivell5']);
            nivell5.x = 0;
            nivell5.y = 0;
            nivell5.cache(0, 0, ampFons,alzFons );

        }
        contenidor2.addChild(nivell5);

       /* if(!contenidor2.hasEventListener("click")){
            contenidor2.addEventListener("click",Busca.clico);//clic en el escenario
        } */
        contenidor2.addChild(mansAnim);



        if(!contenidor2.hasEventListener("mousedown")){
            contenidor2.addEventListener("mousedown", function(evt) {
                posX=evt.stageX;
                posY=evt.stageY;
                prevX=contenidor.x;
                prevY=contenidor.y;
                this.moviment = false;
                // add handlers directly to the event object:
                evt.addEventListener("mousemove", function(evt) {
                    this.moviment= true;
                    iks= evt.stageX-posX+prevX;
                    igrega= evt.stageY-posY+prevY;

                    if(igrega<(alzada-alzFons)){igrega=alzada-alzFons} else if(igrega>0){igrega=0}
                    if(iks>0){iks=0}else if(iks<amplada-ampFons){iks=amplada-ampFons}
                    contenidor.x =iks;
                    contenidor.y =igrega;
                    contenidor2.x =iks;
                    contenidor2.y =igrega;
                    animation.x=iks+biriX;
                    animation.y=igrega+biriY;
                    mansAnim.x=iks+biriX;
                    mansAnim.y=igrega+biriY;
                    stage.update();

                });
                evt.addEventListener("mouseup", function(evt) {
                    console.log("Moviment 2: "+this.moviment);
                    if( !this.moviment) Busca.clico();
                    this.moviment= false;
                    console.log("up") })

            })
        }

        contenidor.x=0;contenidor.y=0;
        contenidor2.x=0;contenidor2.y=0;

        animation.visible=true;
        stage.addChild(animation);
        stage.addChild(contenidor2);
        contenidor2.cache(0, 0, ampFons,alzFons );

    };/// fi posaNivells


};