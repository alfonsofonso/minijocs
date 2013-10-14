/**
 * Created with JetBrains WebStorm.
 * User: Jordi Borrell
 * Date: 16/07/13
 * Time: 11:46
 * To change this template use File | Settings | File Templates.
 */
var map = {};
var preload;
var manifest;
var imatges= new Array();
var sons = new Array();
var NUM_AUDIOS = 19;
var NUM_IMATGES = 215 + NUM_AUDIOS +138;
var loaded_imatges = 0;
var percent;
var carregant;
var android= false;
var fons_loader;
Loader = new function() {


    this.initLoad = function (){
        if(navigator.userAgent.match(/Android/i)) {

            android= true;
        }
        Main.windowResize();
        this.createCounter();
        this.loadSound();

    }
    this.createCounter = function ()
    {

        stage = new createjs.Stage(document.getElementById("mainCanvas"));

        fons_loader = new createjs.Shape();
        fons_loader.graphics.beginFill("orange").drawRect( 0 , 0 , 960/RESOLUTION, 1440/RESOLUTION ); //.drawCircle (50/RESOLUTION, 50/RESOLUTION, 50/RESOLUTION);
        //btCrearBiribiri.graphics.beginFill("red").drawCircle(0, 0, 40);
        fons_loader.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        fons_loader.x = 0;
        fons_loader.y = 0;
        stage.addChild(fons_loader);

        if( percent == null || percent == undefined )
        {
            percent = new createjs.Text("0%", "bold "+(100/RESOLUTION)+"px BoldinaTwo", "#1B2068");
            percent.textBaseline = "alphabetic";
            percent.y = 720 / RESOLUTION;
            percent.x = 420 / RESOLUTION;
        }

        stage.addChild(percent);

        if( carregant == null || carregant == undefined )
        {
            carregant = new createjs.Text("Carregant...", "bold "+(90/RESOLUTION)+"px BoldinaTwo", "#FFF");
            carregant.textBaseline = "alphabetic";
            carregant.y = 515 / RESOLUTION;
            carregant.x = 250 / RESOLUTION;
        }

        stage.addChild(carregant);

        var test = new createjs.Text("A punt de connectar", "bold "+(50/RESOLUTION)+"px BoldinaTwo", "#fff");
        test.textBaseline = "alphabetic";
        test.y = 920 / RESOLUTION;
        test.x = 260 / RESOLUTION;
        stage.addChild(test);

        var test = new createjs.Text("amb en Biri Biri...", "bold "+(50/RESOLUTION)+"px BoldinaTwo", "#fff");
        test.textBaseline = "alphabetic";
        test.y = 980 / RESOLUTION;
        test.x = 300 / RESOLUTION;
        stage.addChild(test);
        stage.update();

        $("#background").css('background-color','orange');

    }

    this.loadSound = function()
    {
        alert("loadSound Initiando")
        if (!createjs.Sound.initializeDefaultPlugins()) {
            loaded_imatges = NUM_AUDIOS;
            this.reload();
        }
        else
        {
            var assetsPath = "audio/";
            var manifestAudio = [
                {src:assetsPath+"Biri_aaa1.mp3|"+assetsPath+"Biri_aaa1.ogg", id:'a1'},
                {src:assetsPath+"Biri_aaa2.mp3|"+assetsPath+"Biri_aaa2.ogg", id:'a2'},
                {src:assetsPath+"Biri_biribiri.mp3|"+assetsPath+"Biri_biribiri.ogg", id:'biri'},

                {src:assetsPath+"Biri_dutxa.mp3|"+assetsPath+"Biri_dutxa.ogg", id:'dutxa'},
                {src:assetsPath+"Biri_pilota.mp3|"+assetsPath+"Biri_pilota.ogg", id:'pilota'},
                {src:assetsPath+"Biri_riu.mp3|"+assetsPath+"Biri_riu.ogg", id:'riu'},

                {src:assetsPath+"Biri_sonall.mp3|"+assetsPath+"Biri_sonall.ogg", id:'sonall'},
                {src:assetsPath+"Biri_xumet.mp3|"+assetsPath+"Biri_xumet.ogg", id:'xumet'},
                {src:assetsPath+"mec.mp3|"+assetsPath+"mec.ogg", id:'mec'},

                {src:assetsPath+"minijoc_superat.mp3|"+assetsPath+"minijoc_superat.ogg", id:'minijoc'},
                {src:assetsPath+"canvi_entorn.mp3|"+assetsPath+"canvi_entorn.ogg", id:'entorn'},
                {src:assetsPath+"toca_objecte.mp3|"+assetsPath+"toca_objecte.ogg", id:'objecte'},
                {src:assetsPath+"touch.mp3|"+assetsPath+"touch.ogg", id:'touch'},

                {src:assetsPath+"xilofon1.mp3|"+assetsPath+"xilofon1.ogg", id:'sound1'},
                {src:assetsPath+"xilofon2.mp3|"+assetsPath+"xilofon2.ogg", id:'sound2'},
                {src:assetsPath+"xilofon3.mp3|"+assetsPath+"xilofon3.ogg", id:'sound3'},
                {src:assetsPath+"xilofon4.mp3|"+assetsPath+"xilofon4.ogg", id:'sound4'},
                {src:assetsPath+"xilofon5.mp3|"+assetsPath+"xilofon5.ogg", id:'sound5'},
                {src:assetsPath+"xilofon6.mp3|"+assetsPath+"xilofon6.ogg", id:'sound6'}
            ];

            createjs.Sound.addEventListener("fileload", createjs.proxy(Loader.soundLoaded, Loader)); // add an event listener for when load is completed
            createjs.Sound.registerManifest(manifestAudio);

        }

    }
    this.soundLoaded = function()
    {
        alert("sound loaded >");
        loaded_imatges++;
        if(loaded_imatges == NUM_AUDIOS)
            this.reload();
    }
    // Reset everything
    this.reload = function () {
        // If there is an open preload queue, close it.
        if (preload != null){ preload.close(); }
        alert("reset evricin");
        // Push each item into our manifest
        manifest = [
            //entorn
             "entorns/entorn_BANY.png",
             "entorns/entorn_cuina.png",
             "entorns/entorn_dorm.png",
             "entorns/entorn_menjador.png",
             "entorns/bandeja_menjador.png",
            //menu principal
             "entorns/desactivats/bany_off.png",
             "entorns/desactivats/dorm_off.png",
             "entorns/desactivats/jugar_off.png",
             "entorns/desactivats/menjar_off.png",
             "entorns/desactivats/cara_off.png",

             "entorns/iluminats/bany_on.png",
             "entorns/iluminats/dormir_on.png",
             "entorns/iluminats/jugar_on.png",
             "entorns/iluminats/menjar_on.png",

             "entorns/BOTO_UP_BANY.png",
             "entorns/BOTO_UP_DORM.png",
             "entorns/BOTO_UP_JOCS.png",
             "entorns/BOTO_UP_MENJA.png",
            //barres
             "entorns/BARRA_INFERIOR.png",
             "entorns/pestanyas_dret.png",
             "entorns/pestanyas_izq.png",
            //submenus
             "entorns/dormir/MANTETA.png",
             "entorns/dormir/os.png",
             "entorns/dormir/XUMET.png",
             "entorns/bany/dutxa.png",
             "entorns/bany/esponja.png",
             "entorns/bany/sabo.png",
             "entorns/JOCS/PILOTA.png",
             "entorns/JOCS/SONALL.png",
             "entorns/JOCS/TITELLA.png",
             "entorns/trona/BIBERO.png",
             "entorns/trona/galeta.png",
             "entorns/trona/papilla.png",
            // estats biribiri
             "entorns/EXPRESIONS/FACE1.png",
             "entorns/EXPRESIONS/FACE2.png",
             "entorns/EXPRESIONS/FACE3.png",
             "entorns/EXPRESIONS/FACE4.png",
             "entorns/EXPRESIONS/FACE5.png",
            //biribiri
             "biribiri/cap/blanc_base.png",
             "biribiri/cap/boca_02.png",
             "biribiri/cap/cap_base.png",
             "biribiri/cap/pupilas.png",
            // "biribiri/bras1.png",
            // "biribiri/bras2.png",
             "biribiri/brasos.png",
             "biribiri/cames.png",
             "biribiri/COS.png",
            // "biribiri/volquer.png",
             "biribiri/pixat.png",
            //animacions
             "biribiri/animacions/parpella.png",
             "biribiri/animacions/pessigolles.png",
             "biribiri/animacions/connecta.png",
             "biribiri/animacions/pilota.png",
             "biribiri/animacions/sonall.png",
             "biribiri/animacions/titella.png",
             "biribiri/animacions/bibero.png",
             "biribiri/animacions/papilla.png",
             "biribiri/animacions/xumet.png",
             "biribiri/animacions/manteta.png",
             "biribiri/animacions/osset.png",
             "biribiri/animacions/dutxa.png",
             "biribiri/animacions/galeta.png",
             "biribiri/animacions/sabo.png",
             "biribiri/animacions/esponja.png",

             "entorns/bombolles/BUB01.png",
             "entorns/bombolles/BUB02.png",
             "entorns/bombolles/BUB03.png",
             "entorns/bombolles/BUB04.png",

            //numeros
             "entorns/numeros/0.png",
             "entorns/numeros/1.png",
             "entorns/numeros/2.png",
             "entorns/numeros/3.png",
             "entorns/numeros/4.png",
             "entorns/numeros/5.png",
             "entorns/numeros/6.png",
             "entorns/numeros/7.png",
             "entorns/numeros/8.png",
             "entorns/numeros/9.png",
            //menu
             "menu/bt_logar.png",
             "menu/bt_nou.png",
             "menu/fons_menu.png",
             "menu/pestanyaNOM.png",
             "menu/pop_crear.png",
             "menu/bt_crea.png",
             //"menu/9.png",
            //icones
             "entorns/icones/boto_info.png",
             "entorns/icones/boto_jocs.png",
             "entorns/icones/copa.png",
             "entorns/icones/medalla.png",
             "entorns/icones/punts.png",
             "entorns/icones/boto_save.png",
             "entorns/icones/boto_enrera.png",

             "menu/ajuda.png",
             "menu/tancar_ajuda.png",
             "menu/basejocs.png",
             "menu/jocs_tornar.png",
             "menu/icona_menys.png",
             "menu/icona_mes.png",

             "menu/base_desa.png",
             "menu/bt_tancar_desa.png",
             "menu/bt_desa.png",

             "menu/btpresentacio.png",
             "menu/presentacio.png",
             "menu/DITS.png",

             "menu/iconaBUSCA.png",
             "menu/iconaDISF.png",
             "menu/iconaUNIR.png",
             "menu/iconaXILOF.png",

             "menu/basecookSi.png",
             "menu/basecookNo.png",
             "menu/botoACCEPTA.png",
             "menu/botoTORNA.png",
             "menu/botoRAS.png",

             "menu/pantalla_eliminar_biribiri.png",
             "menu/esborrar_elimina.png",
             "menu/textNOjocs.png",
             "menu/botofora.png",

            // joc disfressa
             "minijocs/disfressa/btJuga.png",
             "minijocs/disfressa/instruccions.png",
             "minijocs/disfressa/fons.png",
             "minijocs/disfressa/tanca_instruccions.png",

             "minijocs/disfressa/base_disfressa.png",
             "minijocs/disfressa/btCancel.png",
             "minijocs/disfressa/btIcons.png",
             "minijocs/disfressa/futbolista.png",
             "minijocs/disfressa/indi.png",
             "minijocs/disfressa/metge.png",
             "minijocs/disfressa/pallaso.png",
             "minijocs/disfressa/submarinista.png",
            "minijocs/disfressa/icons/FUT1.png",
            "minijocs/disfressa/icons/FUT2.png",
            "minijocs/disfressa/icons/FUT3.png",
            "minijocs/disfressa/icons/IND1.png",
            "minijocs/disfressa/icons/IND2.png",
            "minijocs/disfressa/icons/IND3.png",
            "minijocs/disfressa/icons/MET1.png",
            "minijocs/disfressa/icons/MET2.png",
            "minijocs/disfressa/icons/MET3.png",
            "minijocs/disfressa/icons/PAI1.png",
            "minijocs/disfressa/icons/PAI2.png",
            "minijocs/disfressa/icons/PAI3.png",
            "minijocs/disfressa/icons/SUB1.png",
            "minijocs/disfressa/icons/SUB2.png",
            "minijocs/disfressa/icons/SUB3.png",
            "minijocs/pantallaOK.png",
            "minijocs/pantallaERROR.png",
            "minijocs/boto_tornar.png",
            "minijocs/botobiri.png",

            "minijocs/disfressa/roba/futbolista/1fut.png",
            "minijocs/disfressa/roba/futbolista/2fut.png",
            "minijocs/disfressa/roba/futbolista/3fut.png",
            "minijocs/disfressa/roba/indi/1ind.png",
            "minijocs/disfressa/roba/indi/2ind.png",
            "minijocs/disfressa/roba/indi/3ind.png",
            "minijocs/disfressa/roba/metge/1met.png",
            "minijocs/disfressa/roba/metge/2met.png",
            "minijocs/disfressa/roba/metge/3met.png",
            "minijocs/disfressa/roba/paiaso/1pai.png",
            "minijocs/disfressa/roba/paiaso/2pai.png",
            "minijocs/disfressa/roba/paiaso/3pai.png",
            "minijocs/disfressa/roba/submarinista/1sub.png",
            "minijocs/disfressa/roba/submarinista/2sub.png",
            "minijocs/disfressa/roba/submarinista/3sub.png",

            "final/BASE.png",
            "final/BIRIhappy.png",
            "final/botoCLOSE.png",
            "final/botoPRINT.png",
            "final/botoSAVE.png",
            "final/estrella.png",
            "final/planeta.png",
            "final/nom_biri.png" ,

            "minijocs/xilofon/BASE_xelofon.png",
            "minijocs/xilofon/boto_cancel.png",
            "minijocs/xilofon/TEC_1.png",
            "minijocs/xilofon/TEC_1press.png",
            "minijocs/xilofon/TEC_2.png",
            "minijocs/xilofon/TEC_2press.png",
            "minijocs/xilofon/TEC_3.png",
            "minijocs/xilofon/TEC_3press.png",
            "minijocs/xilofon/TEC_4.png",
            "minijocs/xilofon/TEC_4press.png",
            "minijocs/xilofon/TEC_5.png",
            "minijocs/xilofon/TEC_5press.png",
            "minijocs/xilofon/TEC_6.png",
            "minijocs/xilofon/TEC_6press.png",
            "minijocs/xilofon/escoltaFrame.png",
            "minijocs/xilofon/et_tocaFrame.png",
            "minijocs/xilofon/xelofon_instruc.png",

            "final/estrelles/estel1.png",
            "final/estrelles/estel2.png",
            "final/estrelles/estel3.png",
            "final/estrelles/estel4.png",
            "final/estrelles/estel5.png",
            "final/estrelles/estel6.png",
            "final/estrelles/estel7.png",
            "final/estrelles/estel8.png",
            "final/estrelles/estel9.png",
            "final/estrelles/estel10.png",
            "final/estrelles/estel11.png",
            "final/estrelles/estel12.png",
            "final/estrelles/estel13.png",
            "final/estrelles/estel14.png",
            "final/estrelles/estel15.png",
            "final/estrelles/estel16.png",
            "final/estrelles/estel17.png",
            "final/estrelles/estel18.png",
            "final/estrelles/estel19.png",
            "final/estrelles/estel20.png",
            "final/estrelles/estel21.png",
            "final/estrelles/estel22.png",
            "final/estrelles/estel23.png",
            "final/estrelles/estel24.png",
            "final/estrelles/estel25.png",
            "final/estrelles/estel26.png",
            "final/estrelles/estel27.png",
            "final/estrelles/estel28.png",
            "final/estrelles/estel29.png",
            "final/estrelles/estel30.png",

            "final/llunes/planeta1.png",
            "final/llunes/planeta2.png",
            "final/llunes/planeta3.png",
            "final/llunes/planeta4.png",
            "final/llunes/planeta5.png",

           "minijocs/punts/BASE.png",
           "minijocs/punts/UNIRPUNTS.png",
           "minijocs/punts/CERCLE.png",
           "minijocs/punts/LINEAS/AST1.png",
           "minijocs/punts/LINEAS/AST10.png",
           "minijocs/punts/LINEAS/AST11.png",
           "minijocs/punts/LINEAS/AST12.png",
           "minijocs/punts/LINEAS/AST13.png",
           "minijocs/punts/LINEAS/AST14.png",
           "minijocs/punts/LINEAS/AST15.png",
           "minijocs/punts/LINEAS/AST16.png",
           "minijocs/punts/LINEAS/AST17.png",
           "minijocs/punts/LINEAS/AST18.png",
           "minijocs/punts/LINEAS/AST19.png",
           "minijocs/punts/LINEAS/AST2.png",
           "minijocs/punts/LINEAS/AST20.png",
           "minijocs/punts/LINEAS/AST21.png",
           "minijocs/punts/LINEAS/AST22.png",
           "minijocs/punts/LINEAS/AST23.png",
           "minijocs/punts/LINEAS/AST24.png",
           "minijocs/punts/LINEAS/AST25.png",
           "minijocs/punts/LINEAS/AST26.png",
           "minijocs/punts/LINEAS/AST27.png",
           "minijocs/punts/LINEAS/AST28.png",
           "minijocs/punts/LINEAS/AST29.png",
           "minijocs/punts/LINEAS/AST3.png",
           "minijocs/punts/LINEAS/AST30.png",
           "minijocs/punts/LINEAS/AST31.png",
           "minijocs/punts/LINEAS/AST4.png",
           "minijocs/punts/LINEAS/AST5.png",
           "minijocs/punts/LINEAS/AST6.png",
           "minijocs/punts/LINEAS/AST7.png",
           "minijocs/punts/LINEAS/AST8.png",
           "minijocs/punts/LINEAS/AST9.png",
           "minijocs/punts/LINEAS/BIR1.png",
           "minijocs/punts/LINEAS/BIR10.png",
           "minijocs/punts/LINEAS/BIR11.png",
           "minijocs/punts/LINEAS/BIR12.png",
           "minijocs/punts/LINEAS/BIR13.png",
           "minijocs/punts/LINEAS/BIR14.png",
           "minijocs/punts/LINEAS/BIR15.png",
           "minijocs/punts/LINEAS/BIR16.png",
           "minijocs/punts/LINEAS/BIR17.png",
           "minijocs/punts/LINEAS/BIR18.png",
           "minijocs/punts/LINEAS/BIR19.png",
           "minijocs/punts/LINEAS/BIR2.png",
           "minijocs/punts/LINEAS/BIR20.png",
           "minijocs/punts/LINEAS/BIR21.png",
           "minijocs/punts/LINEAS/BIR22.png",
           "minijocs/punts/LINEAS/BIR3.png",
           "minijocs/punts/LINEAS/BIR4.png",
           "minijocs/punts/LINEAS/BIR5.png",
           "minijocs/punts/LINEAS/BIR6.png",
           "minijocs/punts/LINEAS/BIR7.png",
           "minijocs/punts/LINEAS/BIR8.png",
           "minijocs/punts/LINEAS/BIR9.png",
           "minijocs/punts/LINEAS/coet1.png",
           "minijocs/punts/LINEAS/coet10.png",
           "minijocs/punts/LINEAS/coet11.png",
           "minijocs/punts/LINEAS/coet12.png",
           "minijocs/punts/LINEAS/coet13.png",
           "minijocs/punts/LINEAS/coet14.png",
           "minijocs/punts/LINEAS/coet15.png",
           "minijocs/punts/LINEAS/coet16.png",
           "minijocs/punts/LINEAS/coet17.png",
           "minijocs/punts/LINEAS/coet18.png",
           "minijocs/punts/LINEAS/coet19.png",
           "minijocs/punts/LINEAS/coet2.png",
           "minijocs/punts/LINEAS/coet20.png",
           "minijocs/punts/LINEAS/coet21.png",
           "minijocs/punts/LINEAS/coet22.png",
           "minijocs/punts/LINEAS/coet3.png",
           "minijocs/punts/LINEAS/coet4.png",
           "minijocs/punts/LINEAS/coet5.png",
           "minijocs/punts/LINEAS/coet6.png",
           "minijocs/punts/LINEAS/coet7.png",
           "minijocs/punts/LINEAS/coet8.png",
           "minijocs/punts/LINEAS/coet9.png",
           "minijocs/punts/LINEAS/LINEA1.png",
           "minijocs/punts/LINEAS/LINEA2.png",
           "minijocs/punts/LINEAS/LINEA3.png",
           "minijocs/punts/LINEAS/LINEA4.png",
           "minijocs/punts/LINEAS/LINEA5.png",
           "minijocs/punts/LINEAS/LINEA6.png",
           "minijocs/punts/LINEAS/LINEA7.png",
           "minijocs/punts/LINEAS/LINEA8.png",
           "minijocs/punts/LINEAS/LINEA9.png",
           "minijocs/punts/LINEAS/LINEA10.png",
           "minijocs/punts/LINEAS/LINEA11.png",
           "minijocs/punts/LINEAS/LINEA12.png",
           "minijocs/punts/LINEAS/LINEA13.png",
           "minijocs/punts/LINEAS/LINEA14.png",
           "minijocs/punts/LINEAS/LINEA15.png",
           "minijocs/punts/LINEAS/LINEA16.png",
           "minijocs/punts/LINEAS/LINEA17.png",
           "minijocs/punts/LINEAS/LINEA18.png",
           "minijocs/punts/LINEAS/LINEA19.png",
           "minijocs/punts/LINEAS/llun1.png",
           "minijocs/punts/LINEAS/llun2.png",
           "minijocs/punts/LINEAS/llun3.png",
           "minijocs/punts/LINEAS/llun4.png",
           "minijocs/punts/LINEAS/llun5.png",
           "minijocs/punts/LINEAS/llun6.png",
           "minijocs/punts/LINEAS/llun7.png",
           "minijocs/punts/LINEAS/llun8.png",
           "minijocs/punts/LINEAS/llun9.png",
           "minijocs/punts/LINEAS/llun10.png",
           "minijocs/punts/LINEAS/llun11.png",
           "minijocs/punts/LINEAS/llun12.png",
           "minijocs/punts/LINEAS/llun13.png",
           "minijocs/punts/LINEAS/llun14.png",
           "minijocs/punts/LINEAS/llun15.png",
           "minijocs/punts/LINEAS/llun16.png",
           "minijocs/punts/LINEAS/llun17.png",
           "minijocs/punts/LINEAS/llun18.png",
           "minijocs/punts/LINEAS/llun19.png",
           "minijocs/punts/LINEAS/ovn1.png",
           "minijocs/punts/LINEAS/ovn2.png",
           "minijocs/punts/LINEAS/ovn3.png",
           "minijocs/punts/LINEAS/ovn4.png",
           "minijocs/punts/LINEAS/ovn5.png",
           "minijocs/punts/LINEAS/ovn6.png",
           "minijocs/punts/LINEAS/ovn7.png",
           "minijocs/punts/LINEAS/ovn8.png",
           "minijocs/punts/LINEAS/ovn9.png",
           "minijocs/punts/LINEAS/ovn10.png",
           "minijocs/punts/LINEAS/ovn11.png",
           "minijocs/punts/LINEAS/ovn12.png",
           "minijocs/punts/LINEAS/ovn13.png",
           "minijocs/punts/LINEAS/ovn14.png",
           "minijocs/punts/LINEAS/ovn15.png",
           "minijocs/punts/LINEAS/ovn16.png",
           "minijocs/punts/ref-bases/BASE_ASTRONAUTA.png",
           "minijocs/punts/ref-bases/BASE_BIRIBIRI.png",
           "minijocs/punts/ref-bases/BASE_COET.png",
           "minijocs/punts/ref-bases/BASE_LLUNA.png",
           "minijocs/punts/ref-bases/BASE_OVNI.png",
           "minijocs/punts/ref-bases/BASE_PLANETA.png",
           "minijocs/punts/DIBUIXOS_FINALS/ASTRONAUTA.png",
           "minijocs/punts/DIBUIXOS_FINALS/BIRIBIRI.png",
           "minijocs/punts/DIBUIXOS_FINALS/COET.png",
           "minijocs/punts/DIBUIXOS_FINALS/LLUNA.png",
           "minijocs/punts/DIBUIXOS_FINALS/OVNI.png",
           "minijocs/punts/DIBUIXOS_FINALS/PLANETA.png",

            "minijocs/busca/nivell1.png",
            "minijocs/busca/nivell2.png",
            "minijocs/busca/nivell3.png",
            "minijocs/busca/nivell4.png",
            "minijocs/busca/nivell5.png",
            "minijocs/busca/instruccions_busca.png",
            "minijocs/busca/mansAnim.png",
            "minijocs/busca/spriteSheet.png"

        ];

        // Create a preloader. There is no manifest added to it up-front, we will add items on-demand.
        if(RESOLUTION == 1) preload = new createjs.LoadQueue(true, "img_gran/");
        if(RESOLUTION == 2) preload = new createjs.LoadQueue(true, "img_mig/");
        if(RESOLUTION == 4) preload = new createjs.LoadQueue(true, "img_petit/");

        // Use this instead to use tag loading
        //preload = new createjs.LoadQueue(false);

        preload.addEventListener("fileload", this.handleFileLoad);
        preload.addEventListener("progress", this.handleOverallProgress);
        preload.addEventListener("fileprogress", this.handleFileProgress);
        preload.addEventListener("error",this.handleFileError);
        preload.setMaxConnections(5);

        this.loadAll();
    }

    this.stop = function () {
        if (preload != null) { preload.close(); }
    }

    this.loadAll = function () {
        while (manifest.length > 0) {
            this.loadAnother();
        }
    }

    this.loadAnother = function () {
        // Get the next manifest item, and load it
        var item = manifest.shift();
        preload.loadFile(item);

        // If we have no more items, disable the UI.
        if (manifest.length == 0) {
            alert("toto baixantse")
            //console.log('tot baixant-se');
        }


    }

    // File complete handler
    this.handleFileLoad = function (event) {

        //console.log("Imatge: "+ event.item.src+" Pujada. ");
        switch(event.item.src)
        {
            case "entorns/entorn_cuina.png": imatges['cuina'] =  event.result;
                break;
            case "entorns/bandeja_menjador.png": imatges['bandeja'] =  event.result;
                break;
            case "entorns/entorn_dorm.png":   imatges['dorm'] =  event.result;
                break;
            case "entorns/entorn_menjador.png": imatges['menjador'] =  event.result;
                break;
            case "entorns/entorn_BANY.png":   imatges['bany'] =  event.result;
                break;
            case "biribiri/cap/blanc_base.png": imatges['blank'] =  event.result;
                break;
            case "biribiri/cap/boca_02.png":   imatges['boca'] =  event.result;
                break;
            case "biribiri/cap/cap_base.png":  imatges['cap'] =  event.result;
                break;
            case "biribiri/cap/pupilas.png":  imatges['ulls'] =  event.result;
                break;
            case "biribiri/bras1.png":  imatges['brasDreta'] =  event.result;
                break;
            case "biribiri/bras2.png":  imatges['brasEsquerra'] =  event.result;
                break;
            case "biribiri/brasos.png":  imatges['brassos'] =  event.result;
                break;
            case "biribiri/cames.png":  imatges['cames'] =  event.result;
                break;
            case "biribiri/volquer.png": imatges['volquer'] =  event.result;
                break;
            case "biribiri/COS.png":  imatges['cos'] =  event.result;
                break;
            case "biribiri/pixat.png":  imatges['pixat'] =  event.result;
                break;
            case "entorns/BOTO_UP_BANY.png": imatges['menu_bany'] =  event.result;
                break;
            case "entorns/BOTO_UP_DORM.png":   imatges['menu_dorm'] =  event.result;
                break;
            case "entorns/BOTO_UP_JOCS.png":  imatges['menu_joc'] =  event.result;
                break;
            case "entorns/BOTO_UP_MENJA.png":  imatges['menu_menja'] =  event.result;
                break;
            case "entorns/EXPRESIONS/FACE1.png": imatges['cara1'] =  event.result;
                break;
            case "entorns/EXPRESIONS/FACE2.png":  imatges['cara2'] =  event.result;
                break;
            case "entorns/EXPRESIONS/FACE3.png":  imatges['cara3'] =  event.result;
                break;
            case "entorns/EXPRESIONS/FACE4.png": imatges['cara4'] =  event.result;
                break;
            case "entorns/EXPRESIONS/FACE5.png":  imatges['cara5'] =  event.result;
                break;
            case "entorns/dormir/MANTETA.png":  imatges['maneta'] =  event.result;
                break;
            case "entorns/dormir/os.png": imatges['os'] =  event.result;
                break;
            case "entorns/dormir/XUMET.png": imatges['xumet'] =  event.result;
                break;
            case "entorns/bany/dutxa.png":  imatges['dutxa'] =  event.result;
                break;
            case"entorns/bany/esponja.png": imatges['esponja'] =  event.result;
                break;
            case "entorns/bany/sabo.png": imatges['sabo'] =  event.result;
                break;
            case "entorns/JOCS/PILOTA.png":  imatges['pilota'] =  event.result;
                break;
            case "entorns/JOCS/SONALL.png": imatges['sonall'] =  event.result;
                break;
            case "entorns/JOCS/TITELLA.png": imatges['titella'] =  event.result;
                break;
            case "entorns/trona/BIBERO.png":  imatges['bibero'] =  event.result;
                break;
            case "entorns/trona/galeta.png": imatges['galeta'] =  event.result;
                break;

            case "entorns/trona/papilla.png": imatges['papilla'] =  event.result;
                break;
            case "entorns/BARRA_INFERIOR.png":  imatges['barra_inferior'] =  event.result;
                break;
            case "entorns/pestanyas_dret.png": imatges['barra_dreta'] =  event.result;
                break;
            case "entorns/pestanyas_izq.png": imatges['barra_esquerra'] =  event.result;
                break;

            case "menu/baseopcions.png": imatges['base_opcions'] =  event.result;
                break;
            case "menu/basejocs.png": imatges['base_jocs'] =  event.result;
                break;

            case "entorns/icones/boto_info.png": imatges['info'] =  event.result;
                break;
            case "menu/jocs_tornar.png": imatges['jocs_tornar'] =  event.result;
                break;

            case "menu/iconaBUSCA.png": imatges['ico_busca'] =  event.result;
                break;
            case "menu/iconaDISF.png": imatges['ico_disfressa'] =  event.result;
                break;
            case "menu/iconaUNIR.png": imatges['ico_unir'] =  event.result;
                break;
            case "menu/iconaXILOF.png": imatges['ico_xilofon'] =  event.result;
                break;

            case "menu/btpresentacio.png": imatges['btpresentacio'] =  event.result;
                break;
            case "menu/presentacio.png": imatges['presentacio'] =  event.result;
                break;
            case "menu/DITS.png": imatges['dits'] =  event.result;
                break;

            case "menu/basecookSi.png": imatges['cookie_si'] =  event.result;
                break;
            case "menu/basecookNo.png": imatges['cookie_no'] =  event.result;
                break;
            case "menu/botoACCEPTA.png": imatges['accepta_cookie'] =  event.result;
                break;
            case "menu/botoTORNA.png": imatges['torna_cookie'] =  event.result;
                break;
            case "menu/botoRAS.png": imatges['torna_presentacio'] =  event.result;
                break;

            case "menu/pantalla_eliminar_biribiri.png": imatges['base_elimina'] =  event.result;
                break;
            case "menu/esborrar_elimina.png": imatges['esborrar_biri'] =  event.result;
                break;
            case "menu/textNOjocs.png": imatges['text_no_jocs'] =  event.result;
                break;
            case "menu/botofora.png": imatges['fora_biri'] =  event.result;
                break;

            case "entorns/icones/boto_jocs.png": imatges['joystick'] =  event.result;
                break;
            case "entorns/icones/copa.png":  imatges['copa'] =  event.result;
                break;
            case "entorns/icones/medalla.png": imatges['medalla'] =  event.result;
                break;
            case "entorns/icones/punts.png": imatges['punts'] =  event.result;
                break;
            case "entorns/icones/boto_save.png": imatges['boto_save'] =  event.result;
                break;
            case "entorns/icones/boto_enrera.png": imatges['boto_enrera'] =  event.result;
                break;
            case "biribiri/animacions/parpella.png": imatges['parpella'] =  event.result;
                break;
            case "biribiri/animacions/pessigolles.png": imatges['pessigolles'] =  event.result;
                break;
            case "biribiri/animacions/connecta.png": imatges['connecta'] =  event.result;
                break;
            case "biribiri/animacions/pilota.png": imatges['animPilota'] =  event.result;
                break;
            case "biribiri/animacions/galeta.png": imatges['galetar'] =  event.result;
                break;
            case "biribiri/animacions/sabo.png": imatges['sabonar'] =  event.result;
                break;
            case "biribiri/animacions/esponja.png": imatges['esponjar'] =  event.result;
                break;
            case "entorns/numeros/0.png": imatges['0'] =  event.result;
                break;
            case "entorns/numeros/1.png": imatges['1'] =  event.result;
                break;
            case "entorns/numeros/2.png": imatges['2'] =  event.result;
                break;
            case "entorns/numeros/3.png":  imatges['3'] =  event.result;
                break;
            case "entorns/numeros/4.png": imatges['4'] =  event.result;
                break;
            case "entorns/numeros/5.png": imatges['5'] =  event.result;
                break;
            case "entorns/numeros/6.png": imatges['6'] =  event.result;
                break;
            case "entorns/numeros/7.png": imatges['7'] =  event.result;
                break;
            case "entorns/numeros/8.png": imatges['8'] =  event.result;
                break;
            case "entorns/numeros/9.png": imatges['9'] =  event.result;
                break;
            case "biribiri/animacions/sonall.png": imatges['sonallar'] =  event.result;
                break;
            case "biribiri/animacions/titella.png": imatges['titellar'] =  event.result;
                break;
            case "biribiri/animacions/bibero.png": imatges['biberar'] =  event.result;
                break;
            case "biribiri/animacions/papilla.png": imatges['papillar'] =  event.result;
                break;
            case "biribiri/animacions/xumet.png": imatges['xumetar'] =  event.result;
                break;
            case "biribiri/animacions/manteta.png": imatges['mantetar'] =  event.result;
                break;
            case "biribiri/animacions/osset.png": imatges['ossetar'] =  event.result;
                break;
            case "biribiri/animacions/dutxa.png": imatges['dutxar'] =  event.result;
                break;

            case "entorns/bombolles/BUB01.png": imatges['bombolla1'] =  event.result;
                break;
            case "entorns/bombolles/BUB02.png": imatges['bombolla2'] =  event.result;
                break;
            case "entorns/bombolles/BUB03.png": imatges['bombolla3'] =  event.result;
                break;
            case "entorns/bombolles/BUB04.png": imatges['bombolla4'] =  event.result;
                break;

            case "menu/ajuda.png": imatges['ajuda'] =  event.result;
                break;
            case "menu/tancar_ajuda.png": imatges['tancar_ajuda'] =  event.result;
                break;

            case "menu/base_desa.png": imatges['base_desa'] =  event.result;
                break;
            case "menu/bt_tancar_desa.png": imatges['tancar_desa'] =  event.result;
                break;
            case "menu/bt_desa.png": imatges['bt_desa'] =  event.result;
                break;

            case "menu/bt_logar.png": imatges['logar'] =  event.result;
                break;
            case "menu/bt_nou.png": imatges['noubiri'] =  event.result;
                break;
            case "menu/fons_menu.png": imatges['fons_menu'] =  event.result;
                break;
            case "menu/pestanyaNOM.png": imatges['pestanya_biri'] =  event.result;
                break;
            case "menu/icona_menys.png": imatges['anterior'] =  event.result;
                break;
            case "menu/icona_mes.png": imatges['seguent'] =  event.result;
                break;
            case "menu/pop_crear.png": imatges['pop_crear'] =  event.result;
                break;
            case "menu/bt_crea.png": imatges['bt_crea'] =  event.result;
                break;
            case "entorns/desactivats/bany_off.png": imatges['bany_off'] =  event.result;
                break;
            case "entorns/desactivats/dorm_off.png": imatges['dorm_off'] =  event.result;
                break;
            case "entorns/desactivats/jugar_off.png": imatges['jugar_off'] =  event.result;
                break;
            case "entorns/desactivats/menjar_off.png": imatges['menjar_off'] =  event.result;
                break;
            case "entorns/desactivats/cara_off.png": imatges['cara_off'] =  event.result;
                break;
            case "entorns/iluminats/bany_on.png": imatges['bany_on'] =  event.result;
                break;
            case "entorns/iluminats/dormir_on.png": imatges['dorm_on'] =  event.result;
                break;
            case "entorns/iluminats/jugar_on.png": imatges['jugar_on'] =  event.result;
                break;
            case "entorns/iluminats/menjar_on.png": imatges['menjar_on'] =  event.result;
                break;

            case "minijocs/disfressa/btJuga.png": imatges['juga_disfressa'] =  event.result;
                break;
            case "minijocs/disfressa/instruccions.png": imatges['instruccions_disfressa'] =  event.result;
                break;
            case "minijocs/disfressa/fons.png": imatges['fons_disfressa'] =  event.result;
                break;
            case "minijocs/disfressa/tanca_instruccions.png": imatges['instruccions_tanca'] =  event.result;
                break;
            case "minijocs/disfressa/base_disfressa.png": imatges['base_disfressa'] =  event.result;
                break;
            case "minijocs/disfressa/btCancel.png": imatges['btCancel'] =  event.result;
                break;
            case "minijocs/disfressa/btIcons.png": imatges['btIcons'] =  event.result;
                break;
            case "minijocs/disfressa/futbolista.png": imatges['futbolista'] =  event.result;
                break;
            case "minijocs/disfressa/indi.png": imatges['indi'] =  event.result;
                break;
            case "minijocs/disfressa/metge.png": imatges['metge'] =  event.result;
                break;
            case "minijocs/disfressa/pallaso.png": imatges['pallaso'] =  event.result;
                break;
            case "minijocs/disfressa/submarinista.png": imatges['submarinista'] =  event.result;

                break;
            case "minijocs/disfressa/icons/FUT1.png": imatges['FUT1'] =  event.result;
                break;
            case "minijocs/disfressa/icons/FUT2.png": imatges['FUT2'] =  event.result;
                break;
            case "minijocs/disfressa/icons/FUT3.png": imatges['FUT3'] =  event.result;
                break;
            case "minijocs/disfressa/icons/IND1.png": imatges['IND1'] =  event.result;
                break;
            case "minijocs/disfressa/icons/IND2.png": imatges['IND2'] =  event.result;
                break;
            case "minijocs/disfressa/icons/IND3.png": imatges['IND3'] =  event.result;
                break;
            case "minijocs/disfressa/icons/MET1.png": imatges['MET1'] =  event.result;
                break;
            case "minijocs/disfressa/icons/MET2.png": imatges['MET2'] =  event.result;
                break;
            case "minijocs/disfressa/icons/MET3.png": imatges['MET3'] =  event.result;
                break;
            case "minijocs/disfressa/icons/PAI1.png": imatges['PAI1'] =  event.result;
                break;
            case "minijocs/disfressa/icons/PAI2.png": imatges['PAI2'] =  event.result;
                break;
            case "minijocs/disfressa/icons/PAI3.png": imatges['PAI3'] =  event.result;
                break;
            case "minijocs/disfressa/icons/SUB1.png": imatges['SUB1'] =  event.result;
                break;
            case "minijocs/disfressa/icons/SUB2.png": imatges['SUB2'] =  event.result;
                break;
            case "minijocs/disfressa/icons/SUB3.png": imatges['SUB3'] =  event.result;
                break;

            case "minijocs/pantallaOK.png": imatges['pantallaOK'] =  event.result;
                break;
            case "minijocs/pantallaERROR.png": imatges['pantallaERROR'] =  event.result;
                break;
            case "minijocs/boto_tornar.png": imatges['boto_tornar'] =  event.result;
                break;
            case "minijocs/botobiri.png": imatges['botobiri'] =  event.result;
                break;

            case "minijocs/disfressa/roba/futbolista/1fut.png": imatges['1fut'] =  event.result;
                break;
            case "minijocs/disfressa/roba/futbolista/2fut.png": imatges['2fut'] =  event.result;
                break;
            case "minijocs/disfressa/roba/futbolista/3fut.png": imatges['3fut'] =  event.result;
                break;
            case "minijocs/disfressa/roba/indi/1ind.png": imatges['1ind'] =  event.result;
                break;
            case "minijocs/disfressa/roba/indi/2ind.png": imatges['2ind'] =  event.result;
                break;
            case "minijocs/disfressa/roba/indi/3ind.png": imatges['3ind'] =  event.result;
                break;
            case "minijocs/disfressa/roba/metge/1met.png": imatges['1met'] =  event.result;
                break;
            case "minijocs/disfressa/roba/metge/2met.png": imatges['2met'] =  event.result;
                break;
            case "minijocs/disfressa/roba/metge/3met.png": imatges['3met'] =  event.result;
                break;
            case "minijocs/disfressa/roba/paiaso/1pai.png": imatges['1pai'] =  event.result;
                break;
            case "minijocs/disfressa/roba/paiaso/2pai.png": imatges['2pai'] =  event.result;
                break;
            case "minijocs/disfressa/roba/paiaso/3pai.png": imatges['3pai'] =  event.result;
                break;
            case "minijocs/disfressa/roba/submarinista/1sub.png": imatges['1sub'] =  event.result;
                break;
            case "minijocs/disfressa/roba/submarinista/2sub.png": imatges['2sub'] =  event.result;
                break;
            case "minijocs/disfressa/roba/submarinista/3sub.png": imatges['3sub'] =  event.result;
                break;

            case "final/BIRIhappy.png": imatges['BIRIhappy'] =  event.result;
                break;
            case "final/botoCLOSE.png": imatges['botoCLOSE'] =  event.result;
                break;
            case "final/BASE.png": imatges['base_final'] =  event.result;
                break;
            case "final/botoPRINT.png": imatges['botoPRINT'] =  event.result;
                break;
            case "final/botoSAVE.png": imatges['botoSAVE'] =  event.result;
                break;
            case "final/estrella.png": imatges['estrella'] =  event.result;
                break;
            case "final/planeta.png": imatges['planeta'] =  event.result;
                break;
            case "final/nom_biri.png": imatges['nom_biri'] =  event.result;
                break;

            case "minijocs/xilofon/BASE_xelofon.png" : imatges['BASE_xelofon'] =  event.result;
                break;
            case "minijocs/xilofon/boto_cancel.png" : imatges['cancel_xelofon'] =  event.result;
                break;
            case "minijocs/xilofon/TEC_1.png": imatges['TEC_1'] =  event.result;
                break;
            case "minijocs/xilofon/TEC_1press.png": imatges['TEC_1press'] =  event.result;
                break;
            case "minijocs/xilofon/TEC_2.png": imatges['TEC_2'] =  event.result;
                break;
            case "minijocs/xilofon/TEC_2press.png": imatges['TEC_2press'] =  event.result;
                break;
            case "minijocs/xilofon/TEC_3.png": imatges['TEC_3'] =  event.result;
                break;
            case "minijocs/xilofon/TEC_3press.png": imatges['TEC_3press'] =  event.result;
                break;
            case "minijocs/xilofon/TEC_4.png": imatges['TEC_4'] =  event.result;
                break;
            case "minijocs/xilofon/TEC_4press.png": imatges['TEC_4press'] =  event.result;
                break;
            case "minijocs/xilofon/TEC_5.png": imatges['TEC_5'] =  event.result;
                break;
            case "minijocs/xilofon/TEC_5press.png": imatges['TEC_5press'] =  event.result;
                break;
            case "minijocs/xilofon/TEC_6.png": imatges['TEC_6'] =  event.result;
                break;
            case "minijocs/xilofon/TEC_6press.png": imatges['TEC_6press'] =  event.result;
                break;
            case "minijocs/xilofon/escoltaFrame.png": imatges['escoltaFrame'] =  event.result;
                break;
            case "minijocs/xilofon/et_tocaFrame.png": imatges['et_tocaFrame'] =  event.result;
                break;
            case "minijocs/xilofon/xelofon_instruc.png": imatges['xelofon_instruc'] =  event.result;
                break;


            case "final/estrelles/estel1.png" : imatges['estel1'] =  event.result;
                break;
            case "final/estrelles/estel2.png" : imatges['estel2'] =  event.result;
                break;
            case "final/estrelles/estel3.png" : imatges['estel3'] =  event.result;
                break;
            case "final/estrelles/estel4.png" : imatges['estel4'] =  event.result;
                break;
            case "final/estrelles/estel5.png" : imatges['estel5'] =  event.result;
                break;
            case "final/estrelles/estel6.png" : imatges['estel6'] =  event.result;
                break;
            case "final/estrelles/estel7.png" : imatges['estel7'] =  event.result;
                break;
            case "final/estrelles/estel8.png" : imatges['estel8'] =  event.result;
                break;
            case "final/estrelles/estel9.png" : imatges['estel9'] =  event.result;
                break;
            case "final/estrelles/estel10.png" : imatges['estel10'] =  event.result;
                break;
            case "final/estrelles/estel11.png" : imatges['estel11'] =  event.result;
                break;
            case "final/estrelles/estel12.png" : imatges['estel12'] =  event.result;
                break;
            case "final/estrelles/estel13.png" : imatges['estel13'] =  event.result;
                break;
            case "final/estrelles/estel14.png" : imatges['estel14'] =  event.result;
                break;
            case "final/estrelles/estel15.png" : imatges['estel15'] =  event.result;
                break;
            case "final/estrelles/estel16.png" : imatges['estel16'] =  event.result;
                break;
            case "final/estrelles/estel17.png" : imatges['estel17'] =  event.result;
                break;
            case "final/estrelles/estel18.png" : imatges['estel18'] =  event.result;
                break;
            case "final/estrelles/estel19.png" : imatges['estel19'] =  event.result;
                break;
            case "final/estrelles/estel20.png" : imatges['estel20'] =  event.result;
                break;
            case "final/estrelles/estel21.png" : imatges['estel21'] =  event.result;
                break;
            case "final/estrelles/estel22.png" : imatges['estel22'] =  event.result;
                break;
            case "final/estrelles/estel23.png" : imatges['estel23'] =  event.result;
                break;
            case "final/estrelles/estel24.png" : imatges['estel24'] =  event.result;
                break;
            case "final/estrelles/estel25.png" : imatges['estel25'] =  event.result;
                break;
            case "final/estrelles/estel26.png" : imatges['estel26'] =  event.result;
                break;
            case "final/estrelles/estel27.png" : imatges['estel27'] =  event.result;
                break;
            case "final/estrelles/estel28.png" : imatges['estel28'] =  event.result;
                break;
            case "final/estrelles/estel29.png" : imatges['estel29'] =  event.result;
                break;
            case "final/estrelles/estel30.png" : imatges['estel30'] =  event.result;
                break;

            case "final/llunes/planeta1.png" : imatges['planeta1'] =  event.result;
                break;
            case "final/llunes/planeta2.png" : imatges['planeta2'] =  event.result;
                break;
            case "final/llunes/planeta3.png" : imatges['planeta3'] =  event.result;
                break;
            case "final/llunes/planeta4.png" : imatges['planeta4'] =  event.result;
                break;
            case "final/llunes/planeta5.png" : imatges['planeta5'] =  event.result;
                break;

            case  "minijocs/punts/BASE.png": imatges['BASE_punts'] =  event.result;
                break;
            case  "minijocs/punts/UNIRPUNTS.png": imatges['instruccions_punts'] =  event.result;
                break;

            case  "minijocs/punts/LINEAS/AST1.png": imatges['AST1'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST2.png": imatges['AST2'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST3.png": imatges['AST3'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST4.png": imatges['AST4'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST5.png": imatges['AST5'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST6.png": imatges['AST6'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST7.png": imatges['AST7'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST8.png": imatges['AST8'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST9.png": imatges['AST9'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST10.png": imatges['AST10'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST11.png": imatges['AST11'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST12.png": imatges['AST12'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST13.png": imatges['AST13'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST14.png": imatges['AST14'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST15.png": imatges['AST15'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST16.png": imatges['AST16'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST17.png": imatges['AST17'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST18.png": imatges['AST18'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST19.png": imatges['AST19'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST20.png": imatges['AST20'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST21.png": imatges['AST21'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST22.png": imatges['AST22'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST23.png": imatges['AST23'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST24.png": imatges['AST24'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST25.png": imatges['AST25'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST26.png": imatges['AST26'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST27.png": imatges['AST27'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST28.png": imatges['AST28'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST29.png": imatges['AST29'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST30.png": imatges['AST30'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/AST31.png": imatges['AST31'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet1.png": imatges['coet1'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet2.png": imatges['coet2'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet3.png": imatges['coet3'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet4.png": imatges['coet4'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet5.png": imatges['coet5'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet6.png": imatges['coet6'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet7.png": imatges['coet7'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet8.png": imatges['coet8'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet9.png": imatges['coet9'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet10.png": imatges['coet10'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet11.png": imatges['coet11'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet12.png": imatges['coet12'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet13.png": imatges['coet13'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet14.png": imatges['coet14'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet15.png": imatges['coet15'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet16.png": imatges['coet16'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet17.png": imatges['coet17'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet18.png": imatges['coet18'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet19.png": imatges['coet19'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet20.png": imatges['coet20'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet21.png": imatges['coet21'] =  event.result;
                break;
            case  "minijocs/punts/LINEAS/coet22.png": imatges['coet22'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR1.png": imatges['BIR1'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR2.png": imatges['BIR2'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR3.png": imatges['BIR3'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR4.png": imatges['BIR4'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR5.png": imatges['BIR5'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR6.png": imatges['BIR6'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR7.png": imatges['BIR7'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR8.png": imatges['BIR8'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR9.png": imatges['BIR9'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR10.png": imatges['BIR10'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR11.png": imatges['BIR11'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR12.png": imatges['BIR12'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR13.png": imatges['BIR13'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR14.png": imatges['BIR14'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR15.png": imatges['BIR15'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR16.png": imatges['BIR16'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR17.png": imatges['BIR17'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR18.png": imatges['BIR18'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR19.png": imatges['BIR19'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR20.png": imatges['BIR20'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR21.png": imatges['BIR21'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/BIR22.png": imatges['BIR22'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA1.png": imatges['LINEA1'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA2.png": imatges['LINEA2'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA3.png": imatges['LINEA3'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA4.png": imatges['LINEA4'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA5.png": imatges['LINEA5'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA6.png": imatges['LINEA6'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA7.png": imatges['LINEA7'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA8.png": imatges['LINEA8'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA9.png": imatges['LINEA9'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA10.png": imatges['LINEA10'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA11.png": imatges['LINEA11'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA12.png": imatges['LINEA12'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA13.png": imatges['LINEA13'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA14.png": imatges['LINEA14'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA15.png": imatges['LINEA15'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA16.png": imatges['LINEA16'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA17.png": imatges['LINEA17'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA18.png": imatges['LINEA18'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/LINEA19.png": imatges['LINEA19'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun1.png": imatges['llun1'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun2.png": imatges['llun2'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun3.png": imatges['llun3'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun4.png": imatges['llun4'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun5.png": imatges['llun5'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun6.png": imatges['llun6'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun7.png": imatges['llun7'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun8.png": imatges['llun8'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun9.png": imatges['llun9'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun10.png": imatges['llun10'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun11.png": imatges['llun11'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun12.png": imatges['llun12'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun13.png": imatges['llun13'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun14.png": imatges['llun14'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun15.png": imatges['llun15'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun16.png": imatges['llun16'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun17.png": imatges['llun17'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun18.png": imatges['llun18'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/llun19.png": imatges['llun19'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn1.png": imatges['ovn1'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn2.png": imatges['ovn2'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn3.png": imatges['ovn3'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn4.png": imatges['ovn4'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn5.png": imatges['ovn5'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn6.png": imatges['ovn6'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn7.png": imatges['ovn7'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn8.png": imatges['ovn8'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn9.png": imatges['ovn9'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn10.png": imatges['ovn10'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn11.png": imatges['ovn11'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn12.png": imatges['ovn12'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn13.png": imatges['ovn13'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn14.png": imatges['ovn14'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn15.png": imatges['ovn15'] =  event.result;
                break;
            case   "minijocs/punts/LINEAS/ovn16.png": imatges['ovn16'] =  event.result;
                break;

            case  "minijocs/punts/ref-bases/BASE_ASTRONAUTA.png": imatges['BASE_ASTRONAUTA'] =  event.result;
                break;
            case  "minijocs/punts/ref-bases/BASE_BIRIBIRI.png": imatges['BASE_BIRIBIRI'] =  event.result;
                break;
            case  "minijocs/punts/ref-bases/BASE_COET.png": imatges['BASE_COET'] =  event.result;
                break;
            case  "minijocs/punts/ref-bases/BASE_LLUNA.png": imatges['BASE_LLUNA'] =  event.result;
                break;
            case  "minijocs/punts/ref-bases/BASE_OVNI.png": imatges['BASE_OVNI'] =  event.result;
                break;
            case  "minijocs/punts/ref-bases/BASE_PLANETA.png": imatges['BASE_PLANETA'] =  event.result;
                break;

            case   "minijocs/punts/DIBUIXOS_FINALS/ASTRONAUTA.png": imatges['ASTRONAUTA'] =  event.result;
                break;
            case   "minijocs/punts/DIBUIXOS_FINALS/OVNI.png": imatges['OVNI'] =  event.result;
                break;
            case   "minijocs/punts/DIBUIXOS_FINALS/BIRIBIRI.png": imatges['BIRIBIRI'] =  event.result;
                break;
            case   "minijocs/punts/DIBUIXOS_FINALS/COET.png": imatges['COET'] =  event.result;
                break;
            case   "minijocs/punts/DIBUIXOS_FINALS/LLUNA.png": imatges['LLUNA'] =  event.result;
                break;
            case   "minijocs/punts/DIBUIXOS_FINALS/PLANETA.png": imatges['PLANETA'] =  event.result;
                break;

            case   "minijocs/punts/CERCLE.png": imatges['CERCLE'] =  event.result;
                break;

            case  "minijocs/busca/instruccions_busca.png": imatges['instruccions_busca'] =  event.result;
                break;
            case   "minijocs/busca/nivell1.png": imatges['nivell1'] =  event.result;
                break;
            case   "minijocs/busca/nivell2.png": imatges['nivell2'] =  event.result;
                break;
            case   "minijocs/busca/nivell3.png": imatges['nivell3'] =  event.result;
                break;
            case   "minijocs/busca/nivell4.png": imatges['nivell4'] =  event.result;
                break;
            case   "minijocs/busca/nivell5.png": imatges['nivell5'] =  event.result;
                break;
            case   "minijocs/busca/mansAnim.png": imatges['mansAnim'] =  event.result;
                break;
            case   "minijocs/busca/spriteSheet.png": imatges['busca_biri'] =  event.result;
                break;
        }

        loaded_imatges++;
        console.log(loaded_imatges);
        if( loaded_imatges == NUM_IMATGES )
        {
            // Main.InitGame();
            stage.removeChild( fons_loader );
            alert("llamo a menu.initMenu");
            Menu.initMenu();
            //alert('final');

        }
       // img = event.result;
        //var img = event.rawResult;
       // console.log(img);
        //init();
    }

    // File progress handler
    this.handleFileProgress = function (event) {
        console.log("Imatge: "+ event.item.src+" -  progres: "+ preload.progress );
    }

    // Overall progress handler
    this.handleOverallProgress = function (event) {
       // console.log("Prgres total: "+ preload.progress );
        //percent.text = Math.floor(preload.progress*100)+"%";
        percent.text = Math.floor(loaded_imatges*100/NUM_IMATGES)+"%";
        stage.update();
       // console.log(imatges);
    }

    // An error happened on a file
    this.handleFileError = function (event) {

        alert("handlerFile error: "+ event.item.src );
    }
}