/**
 * Created with JetBrains WebStorm.
 * User: Jordi Borrell
 * Date: 8/10/13
 * Time: 12:38
 * To change this template use File | Settings | File Templates.
 */


Punts=new function(){

    var amplada=960;
    var alzada=1440;

    var BASE;
    var base_instruc;
    var boto_cancel;

    var pantallaOK;
    var pantallaERROR;
    var boto_tornar;
    var BOTO_JUGA;

    var marge;

    var arrayNums;
    var dibujo;
    var numToc;
    var arrayCapas=["AST","BIR","coet","llun","ovn","LINEA"];
    var arrayFinals=["ASTRONAUTA","BIRIBIRI","COET","LLUNA","OVNI","PLANETA"];
    var capa;
    var moltMal, moltBe;
    var imagenFinal;
    var BOTO_CANCELA;
    var CERCLE;

    var BASE_ASTRONAUTA, BASE_BIRIBIRI, BASE_COET, BASE_LLUNA, BASE_OVNI, BASE_PLANETA;
    var arrBases=[BASE_ASTRONAUTA, BASE_BIRIBIRI, BASE_COET, BASE_LLUNA, BASE_OVNI, BASE_PLANETA];

    this.initMenu=function(){

        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", Main.handlerTick);
        stage.removeEventListener('stagemousedown', Main.handlerTick) ;

        InfoGame.emoticJoc = smileyJOC ;
        InfoGame.emoticCuina = smileyMENJA;
        InfoGame.emoticBany = smileyDUTXA;
        InfoGame.emoticDorm = smileyDORM;

        marge=30/RESOLUTION;
        this.createFons();
        this.createInstruccions();

        createjs.Ticker.addEventListener("tick", Punts.handleTemps);


    };

    this.handleTemps=function(){

        stage.update();
    };

    this.createFons= function(){

        if( BASE == null || BASE == undefined )
        {
            BASE = new createjs.Bitmap(imatges['BASE_punts']);
            BASE.x = 0;
            BASE.y = 0;
            BASE.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(BASE);

        var text2 = new createjs.Text( InfoGame.nomBiriBiri, 80/RESOLUTION+"px BoldinaScript", "#fff");
        text2.x = 200/RESOLUTION;
        text2.y = 135/RESOLUTION;
        text2.textBaseline = "alphabetic";
        stage.addChild(text2);

        var text1 = new createjs.Text( InfoGame.nomBiriBiri, 80/RESOLUTION+"px BoldinaScript", "#000");
        text1.x = 200/RESOLUTION;
        text1.y = 135/RESOLUTION;
        text1.textBaseline = "alphabetic";
        text1.outline= true;
        stage.addChild(text1);

    };

    this.createInstruccions = function() {

        if( base_instruc == null || base_instruc == undefined )
        {
            base_instruc = new createjs.Bitmap(imatges['instruccions_punts']);
            base_instruc.x = 0;
            base_instruc.y = 0;
            base_instruc.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(base_instruc);


        close_intruccions = new createjs.Bitmap(imatges['cancel_xelofon']);
        close_intruccions.x =  720/RESOLUTION;
        close_intruccions.y =94/RESOLUTION;
        close_intruccions.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);

        close_intruccions.addEventListener('click',  Punts.handlerCancel);
        stage.addChild(close_intruccions);

        if( bt_juga == null || bt_juga == undefined )
        {
            bt_juga = new createjs.Bitmap(imatges['juga_disfressa']);
            bt_juga.x = 0;
            bt_juga.y = 0;
            bt_juga.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_juga);
        bt_juga.addEventListener('click',  Punts.handlerJUGA);
    };

    this.handlerCancel=function(){
        stage.removeAllChildren();
        stage.removeEventListener("click",Punts.tocoPunt);
        createjs.Ticker.removeEventListener("tick", Punts.handleTemps);
        numToc=0;

        Main.InitGame();
    }

    this.handlerJUGA=function(){

        //stage.removeChild(boto_cancel);
        stage.removeChild(bt_juga);
        stage.removeChild(close_intruccions);
        stage.removeChild(base_instruc);
        Punts.ferPartida();
    };

    this.ferPartida=function(){
        dibujo=Math.ceil(Math.random()*6);
        numToc=0;
        arrayNums=Punts.cargaArrays(dibujo);
        Punts.domDibuix();

    };


    this.tocoPunt=function(e){


        if(e.stageX> amplada/RESOLUTION - 180/RESOLUTION  &&  e.stageY<180/RESOLUTION){  //// simulació BOTO_CANCELA

            Punts.handlerCancel();
            return;
        }

        if(numToc==0){/// tocar el punt 1 no dibuixa res
            if (Math.abs(arrayNums[numToc][0]/RESOLUTION - e.stageX)<50 && Math.abs(arrayNums[numToc][1]/RESOLUTION- e.stageY)<50){
                numToc++;

                CERCLE = new createjs.Bitmap(imatges['CERCLE']);
                CERCLE.x = arrayNums[0][0]/RESOLUTION;// 960/RESOLUTION-200/RESOLUTION;
                CERCLE.y = arrayNums[0][1]/RESOLUTION;//s120/RESOLUTION;
                CERCLE.regX=40/RESOLUTION;
                CERCLE.regY=40/RESOLUTION;
                CERCLE.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);

                stage.addChild(CERCLE);
            }
            return

        }else if(numToc>=arrayNums.length){// tocar el punt 1 per tancar el dibuix

            stage.removeChild(capa);
            capa=null;

            capa= new createjs.Bitmap(imatges[arrayCapas[dibujo-1]+(arrayNums.length).toString()]);
            capa.x = 0;
            capa.y = 0;
            capa.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
            setTimeout(Punts.mostrarImatge,500);
            stage.addChild(capa);
            numToc=0;
            return;
        }

        if(Math.abs(arrayNums[numToc][0]/RESOLUTION - e.stageX)<50 && Math.abs(arrayNums[numToc][1]/RESOLUTION- e.stageY)<50){//acierta

            stage.removeChild(capa);
            capa=null;

            capa= new createjs.Bitmap(imatges[arrayCapas[dibujo-1]+(numToc).toString()]);
            capa.x = 0;
            capa.y = 0;
            capa.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);

            stage.addChild(capa);
        }else{
            Punts.malament();
        }


        numToc++;

    };

    this.mostrarImatge=function(){

        stage.removeAllChildren();
        stage.addChild(BASE);

        imagenFinal = new createjs.Bitmap(imatges[arrayFinals[dibujo-1]]);
        imagenFinal.x = 0;
        imagenFinal.y = 0;
        imagenFinal.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);

        stage.addChild(imagenFinal);
        numToc=0;
        setTimeout(Punts.aconseguit,2000);
    }

    this.aconseguit=function(){
        stage.removeChild(imagenFinal);
        imagenFinal=null;

        stage.removeEventListener("click",Punts.tocoPunt);

       /* if( moltBe  == null || moltBe == undefined )
        {
            moltBe = new createjs.Bitmap(imatges['moltBe']);
            moltBe.x = 0;
            moltBe.y = 0;
            moltBe.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
            moltBe.addEventListener("click",Punts.ferUnaAltrePartida);
        }
        stage.addChild(moltBe); */
        InfoGame.punts += 50;
        puntuacio += 50;
        Punts.createFons();
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

        close_intruccions.addEventListener('click',  Punts.handlerCancel);
        stage.addChild(close_intruccions);

        if( bt_rejugar == null || bt_rejugar == undefined )
        {
            bt_rejugar = new createjs.Bitmap(imatges['boto_tornar']);
            bt_rejugar.x = 0;
            bt_rejugar.y = 0;
            bt_rejugar.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_rejugar);
        bt_rejugar.addEventListener('click',  Punts.ferUnaAltrePartida);
        if( bt_rebiri == null || bt_rebiri == undefined )
        {
            bt_rebiri = new createjs.Bitmap(imatges['botobiri']);
            bt_rebiri.x = 0;
            bt_rebiri.y = 0;
            bt_rebiri.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_rebiri);
        bt_rebiri.addEventListener('click', Punts.handlerCancel);
        numToc=0;
    }

    this.malament=function(){
        stage.removeEventListener("click",Punts.tocoPunt);
        /*if( moltMal == null || moltMal == undefined )
        {
            moltMal = new createjs.Bitmap(imatges['moltMal']);
            moltMal.x = 0;// 960/RESOLUTION-200/RESOLUTION;
            moltMal.y = 0;//s120/RESOLUTION;
            moltMal.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
            moltMal.addEventListener("click",Punts.ferUnaAltrePartida);
        }
        stage.addChild(moltMal);
                                  */
        Punts.createFons();
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

        close_intruccions.addEventListener('click',  Punts.handlerCancel);
        stage.addChild(close_intruccions);

        if( bt_rejugar == null || bt_rejugar == undefined )
        {
            bt_rejugar = new createjs.Bitmap(imatges['boto_tornar']);
            bt_rejugar.x = 0;
            bt_rejugar.y = 0;
            bt_rejugar.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_rejugar);
        bt_rejugar.addEventListener('click',  Punts.ferUnaAltrePartida);
        if( bt_rebiri == null || bt_rebiri == undefined )
        {
            bt_rebiri = new createjs.Bitmap(imatges['botobiri']);
            bt_rebiri.x = 0;
            bt_rebiri.y = 0;
            bt_rebiri.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_rebiri);
        bt_rebiri.addEventListener('click', Punts.handlerCancel);
        numToc=0;

    }

    this.ferUnaAltrePartida=function(){

        stage.removeAllChildren();
        Punts.createFons();
        Punts.ferPartida();

    }

    this.domDibuix=function(){

        if(dibujo==1){
            if( BASE_ASTRONAUTA == null || BASE_ASTRONAUTA == undefined )
            {
                BASE_ASTRONAUTA = new createjs.Bitmap(imatges['BASE_ASTRONAUTA']);
                BASE_ASTRONAUTA.x = 0;// 960/RESOLUTION-200/RESOLUTION;
                BASE_ASTRONAUTA.y = 0;//s120/RESOLUTION;
                BASE_ASTRONAUTA.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
            }
            stage.addChild(BASE_ASTRONAUTA);
        }else if(dibujo==2){
            if( BASE_BIRIBIRI == null || BASE_BIRIBIRI == undefined )
            {
                BASE_BIRIBIRI = new createjs.Bitmap(imatges['BASE_BIRIBIRI']);
                BASE_BIRIBIRI.x = 0;// 960/RESOLUTION-200/RESOLUTION;
                BASE_BIRIBIRI.y = 0;//s120/RESOLUTION;
                BASE_BIRIBIRI.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
            }
            stage.addChild(BASE_BIRIBIRI);
        }else if(dibujo==3){
            if( BASE_COET == null || BASE_COET == undefined )
            {
                BASE_COET = new createjs.Bitmap(imatges['BASE_COET']);
                BASE_COET.x = 0;// 960/RESOLUTION-200/RESOLUTION;
                BASE_COET.y = 0;//s120/RESOLUTION;
                BASE_COET.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
            }
            stage.addChild(BASE_COET);
        }else if(dibujo==4){
            if( BASE_LLUNA == null || BASE_ASTRONAUTA == BASE_LLUNA )
            {
                BASE_LLUNA = new createjs.Bitmap(imatges['BASE_LLUNA']);
                BASE_LLUNA.x = 0;// 960/RESOLUTION-200/RESOLUTION;
                BASE_LLUNA.y = 0;//s120/RESOLUTION;
                BASE_LLUNA.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
            }
            stage.addChild(BASE_LLUNA);
        }else if(dibujo==5){
            if( BASE_OVNI == null || BASE_OVNI == undefined )
            {
                BASE_OVNI = new createjs.Bitmap(imatges['BASE_OVNI']);
                BASE_OVNI.x = 0;// 960/RESOLUTION-200/RESOLUTION;
                BASE_OVNI.y = 0;//s120/RESOLUTION;
                BASE_OVNI.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
            }
            stage.addChild(BASE_OVNI);
        }else {
            if( BASE_PLANETA == null || BASE_PLANETA == undefined )
            {
                BASE_PLANETA = new createjs.Bitmap(imatges['BASE_PLANETA']);
                BASE_PLANETA.x = 0;// 960/RESOLUTION-200/RESOLUTION;
                BASE_PLANETA.y = 0;//s120/RESOLUTION;
                BASE_PLANETA.cache(0, 0, amplada/RESOLUTION, alzada/RESOLUTION);
            }
            stage.addChild(BASE_PLANETA);
        }

        stage.addEventListener('click',  Punts.tocoPunt);
    };

    this.cargaArrays=function(num){



        if(num==2){
            return [[457,489],[682,519],[732,508],[792,423],[837,370],[820,436],[766,526],[783,567],[883,763],[813,993],
                [607,1083],[468,1129],[318,1072],[102,966],[57,795],[156,574],[177,526],[126,444],[105,375],
                [157,421],[211,504],[261,516]];// base biribiri, length 22
        }else if(num==1){
            return [[430,408],[604,514],[582,674],[686,552],[690,488],[728,526],[818,464],[874,590],[794,614],[662,776],
                [684,894],[662,1038],[718,1120],[860,1134],[688,1270],[592,1110],[484,1126],[436,1316],[234,1236],[360,1178],[394,1098],
                [324,1008],[310,942],[230,1008],[214,1084],[84,1014],[142,940],[92,910],[168,902],[328,762],[246,572]];//astron length 31
        }else if(num==3){
            return [[838,270],[830,434],[772,672],[680,862],[672,1014],[562,1142],[542,1062],[478,1130],[428,1120],
                [273,1234],[285,1152],[160,1230],[210,1089],[99,1143],[169,942],[133,891],[175,810],[85,808],[177,682],
                [306,619],[459,471],[666,336]];//coet length=22
        }else if(num==6){
            return [[435,463],[630,501],[714,598],[915,622],[745,784],[483,880],[213,909],[34,853],[166,745],[108,826],
                [471,826],[741,726],[808,651],[729,637],[697,900],[513,1014],[279,957],[181,808],[241,564]]; //planeta length=19
        }else if(num==5){
            return[[397,286],[406,220],[456,247],[421,289],[448,435],[585,459],[663,576],[829,633],[805,784],
                [664,852],[510,952],[328,894],[159,855],[114,718],[256,636],[321,496]];//ovni length=16
        }else{
            return[[637,339],[486,513],[463,699],[583,679],[603,793],[483,820],[501,867],[286,864],[306,988],
                [487,1044],[615,979],[741,1023],[904,969],[705,1144],[391,1170],[162,997],[95,721],[207,468],[406,351]];//lluna 19
        }
    }


};
