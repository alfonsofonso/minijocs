/**
 * Created with JetBrains WebStorm.
 * User: Jordi Borrell
 * Date: 16/07/13
 * Time: 12:54
 * To change this template use File | Settings | File Templates.
 */

var body;
var cames ;
var volquer ;
var blanc ;
var ulls ;
var busto ;
var brasE ;
var brasD ;
var brassos;
var parpalleig;
var pessigolles;
var connecta;
var piloteja;
var boca;
var sonallar;
var titellar;
var biberar;
var papillar;
var xumetar;
var mantetar;
var dutxar;
var galetar;
var sabonar;
var esponjar;
var bandeja;
var pixat;


//var blanc ;
var OFFSET_VERTICAL = 275/RESOLUTION;
var OFFSET_HORITZONTAL = 75/RESOLUTION;
Biribiri = new  function() {
    this.createBiriBiri  = function ()
    {
        this.createPixat();
        this.createBody();
        ///this.createVolquer();
        this.createCames();
        //this.createTaulell();
        this.createHead();
        //this.createBrasD();
       // this.createBrasE();
        this.createBrassos();

        this.createPessigolles();
        this.createConnecta();
        this.createPiloteja();
        this.createSonall();
        this.createTitellar();
        this.createBiberar();
        this.createPapillar();
        this.createXumetar();
        this.createMentetar();
        this.createOssetar();
        this.createDutxar();
        this.createGaletar();
        this.createEnsabonar();
        this.createEsponjar();

    }
    this.createPixat= function()
    {
        pixat = new createjs.Bitmap(imatges['pixat']);
        pixat.x = 250/RESOLUTION;
        pixat.y = 960/RESOLUTION;
        pixat.cache(0, 0,423/RESOLUTION, 186/RESOLUTION);
        stage.addChild(pixat);
        pixat.addEventListener('tick',  Biribiri.handlerPixat);
        pixat.alpha=0;
    }
    this.handlerPixat = function()
    {
        if(pixat.alpha < 1) pixat.alpha += 0.0005;
    }
    this.tocaBiribiri= function( )
    {
        posX = stage.mouseX-OFFSET_HORITZONTAL ;
        posY = stage.mouseY-OFFSET_VERTICAL;
        return   cames.hitTest(posX,posY) | /*volquer.hitTest(posX,posY) | brasD.hitTest(posX,posY) |*/
            body.hitTest(posX,posY) | busto.hitTest(posX,posY) | brassos.hitTest(posX,posY);
    }
    this.amagaBiriBase = function()
    {
        //brasD.visible = false;
        brassos.visible= false;
        body.visible = false;
        cames.visible = false;
       // volquer.visible = false;
        blanc.visible = false;
        ulls.visible = false;
        busto.visible = false;
        //brasE.visible = false;
       // brasD.visible  = false;
        parpalleig.visible = false;

        boca.visible = false;

    }
    this.mostraBiriBase = function()
    {
        //brasD.visible = true;
        brassos.visible = true;
        body.visible = true;
        cames.visible = true;
       // volquer.visible = true;
        blanc.visible = true;
        ulls.visible = true;
        busto.visible = true;
        //brasE.visible = true;
       // brasD.visible  = true;
        parpalleig.visible = true;
        pessigolles.visible = false;
        connecta.visible = false;
        piloteja.visible = false;
        boca.visible = true;
        sonallar.visible = false;
        titellar.visible= false;
        biberar.visible= false;
        papillar.visible= false;
        xumetar.visible= false;
        mantetar.visible= false;
        ossetar.visible= false;
        dutxar.visible= false;
        galetar.visible = false;
        sabonar.visible = false;
        esponjar.visible = false;
       // if( currentEscena == "MENJA")
            //bandeja.visible= true;

    }
    this.animacioPlaying = function()
    {
        return !pessigolles.visible && !connecta.visible && !piloteja.visible
            && !sonallar.visible  && !titellar.visible && !ossetar.visible
            && !biberar.visible && !papillar.visible && !xumetar.visible
            && !mantetar.visible && !dutxar.visible && !sabonar.visible
            && !esponjar.visible && !galetar.visible;
    }
    this.createBrasD  = function ()
    {
        brasD = new createjs.Bitmap(imatges['brasDreta']);
        brasD.x = OFFSET_HORITZONTAL;
        brasD.y = OFFSET_VERTICAL;
        brasD.cache(0, 0,792/RESOLUTION, 980/RESOLUTION);
        stage.addChild(brasD);
        brasD.addEventListener('mousedown',  this.handlerTronco);

    }
    this.createBrasE  =function ()
    {
        brasE = new createjs.Bitmap(imatges['brasEsquerra']);
        brasE.x = OFFSET_HORITZONTAL;
        brasE.y = OFFSET_VERTICAL;
        brasE.cache(0, 0,792/RESOLUTION, 980/RESOLUTION);
        stage.addChild(brasE);
        brasE.addEventListener('mousedown',  this.handlerTronco);

    }
    this.createBrassos  =function ()
    {
        if( brassos == null && brassos == undefined )
        {
            brassos = new createjs.Bitmap(imatges['brassos']);
            brassos.x = OFFSET_HORITZONTAL;
            brassos.y = OFFSET_VERTICAL;
            brassos.cache(0, 0,792/RESOLUTION, 980/RESOLUTION);

        }
        stage.addChild(brassos);
        brassos.addEventListener('mousedown',  this.handlerTronco);
    }
    this.createHead  =function ()
    {
        this.createBlanc();
        this.createUlls();
        this.createBusto();
        this.createParpella();

        this.createBoca() ;

    }
    this.createBoca  =function ()
    {
        boca = new createjs.Bitmap(imatges['boca']);
        boca.x = OFFSET_HORITZONTAL;
        boca.y = OFFSET_VERTICAL;
        boca.cache(0, 0,792/RESOLUTION, 980/RESOLUTION);
        stage.addChild(boca);
        boca.visible= false;

    }
    this.createTaulell = function()
    {
        bandeja = new createjs.Bitmap(imatges['bandeja']);
        bandeja.x =  30/RESOLUTION;
        bandeja.y = 735/RESOLUTION;
        bandeja.cache(0, 0,897/RESOLUTION, 254/RESOLUTION);
        stage.addChild(bandeja);
        bandeja.visible= false;
    }
    this.createEsponjar = function ()
    {
        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "move":{
                    frames: [0,1,2,3,4,5,6,7,2,3,4,1,0],
                    frequency: 3,
                    next: ""
                }
            },
            "images": [imatges['esponjar']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width": 792/RESOLUTION,
                "regX": 0,
                "regY":0,
                "count": 8
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        esponjar = new createjs.BitmapAnimation(array_imatges);
        esponjar.x = OFFSET_HORITZONTAL;
        esponjar.y = OFFSET_VERTICAL;

        stage.addChild(esponjar);
        esponjar.addEventListener('animationend', this.handlerDutxar);
        esponjar.visible= false;
        //pessigolles.gotoAndPlay("move");
    }
    this.createEnsabonar = function ()
    {
        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "move":{
                    frames: [0,1,2,3,4,5,6,7,8,9,10,11,9,10,11],
                    frequency: 3,
                    next: ""
                }
            },
            "images": [imatges['sabonar']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width": 792/RESOLUTION,
                "regX": 0,
                "regY":0,
                "count": 12
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        sabonar = new createjs.BitmapAnimation(array_imatges);
        sabonar.x = OFFSET_HORITZONTAL;
        sabonar.y = OFFSET_VERTICAL;

        stage.addChild(sabonar);
        sabonar.addEventListener('animationend', this.handlerDutxar);
        sabonar.visible= false;
        //pessigolles.gotoAndPlay("move");
    }
    this.createDutxar = function ()
    {
        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "move":{
                    frames: [0,1,2,3,0,1,2,3,0],
                    frequency: 4,
                    next: ""
                }
            },
            "images": [imatges['dutxar']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width": 792/RESOLUTION,
                "regX": 0,
                "regY":0,
                "count": 4
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        dutxar = new createjs.BitmapAnimation(array_imatges);
        dutxar.x = OFFSET_HORITZONTAL;
        dutxar.y = OFFSET_VERTICAL;

        stage.addChild(dutxar);
        dutxar.addEventListener('animationend', this.handlerDutxar);
        dutxar.visible= false;
        //pessigolles.gotoAndPlay("move");
    }
    this.handlerDutxar= function()
    {
        Biribiri.mostraBiriBase();
        Audio.stopAudio();
        Audio.sonaA1();
    }
    this.createOssetar = function ()
    {
        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "move":{
                    frames: [0,1,2,3,4,3,4,3,4,3,2,1,0],
                    frequency: 4,
                    next: ""
                }
            },
            "images": [imatges['ossetar']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width": 792/RESOLUTION,
                "regX": 0,
                "regY":0,
                "count": 5
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        ossetar = new createjs.BitmapAnimation(array_imatges);
        ossetar.x = OFFSET_HORITZONTAL;
        ossetar.y = OFFSET_VERTICAL;

        stage.addChild(ossetar);
        ossetar.addEventListener('animationend', this.handlerOssetar);
        ossetar.visible= false;
        //pessigolles.gotoAndPlay("move");
    }
    this.handlerOssetar= function()
    {
        Biribiri.mostraBiriBase();
        Audio.sonaA2();
    }
    this.createMentetar = function ()
    {
        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "move":{
                    frames: [0,1,2,3,4,3,4,3,4,2,1,0],
                    frequency: 4,
                    next: ""
                }
            },
            "images": [imatges['mantetar']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width":792/RESOLUTION,
                "regX": 0,
                "regY":0,
                "count": 5
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        mantetar = new createjs.BitmapAnimation(array_imatges);
        mantetar.x = OFFSET_HORITZONTAL;
        mantetar.y = OFFSET_VERTICAL;

        stage.addChild(mantetar);
        mantetar.addEventListener('animationend', this.handlerMantejar);
        mantetar.visible= false;
        //pessigolles.gotoAndPlay("move");
    }
    this.handlerMantejar= function()
    {
        Biribiri.mostraBiriBase();
        Audio.sonaA1();
    }
    this.createXumetar = function ()
    {
        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "move":{
                    frames: [0,1,2,3,4,3,4,3,4,3,4,3,2,1,0],
                    frequency: 4,
                    next: ""
                }
            },
            "images": [imatges['xumetar']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width":792/RESOLUTION,
                "regX": 0,
                "regY":0,
                "count": 5
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        xumetar = new createjs.BitmapAnimation(array_imatges);
        xumetar.x = OFFSET_HORITZONTAL;
        xumetar.y = OFFSET_VERTICAL;

        stage.addChild(xumetar);
        xumetar.addEventListener('animationend', this.handlerXumetar);
        xumetar.visible= false;
        //pessigolles.gotoAndPlay("move");
    }
    this.handlerXumetar= function()
    {
        Biribiri.mostraBiriBase();
        Audio.stopAudio();
        Audio.sonaA2();
    }
    this.createBiberar = function ()
    {
        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "move":{
                    frames: [0,1,4,2,3,2,3,2,4,1,0],
                    frequency: 4,
                    next: ""
                }
            },
            "images": [imatges['biberar']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width":792/RESOLUTION,
                "regX": 0,
                "regY":0,
                "count": 5
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        biberar = new createjs.BitmapAnimation(array_imatges);
        biberar.x = OFFSET_HORITZONTAL;
        biberar.y = OFFSET_VERTICAL;

        stage.addChild(biberar);
        biberar.addEventListener('animationend', this.handlerBiberar);
        biberar.visible= false;
        //pessigolles.gotoAndPlay("move");
    }
    this.handlerBiberar= function()
    {
        Biribiri.mostraBiriBase();
        Audio.stopAudio();
        Audio.sonaA1();
    }
    this.createGaletar = function ()
    {
        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "menja":{
                    frames: [0,1,2,3,4,5,6,7,4,5,6,7,4,5,6,7,3],
                    frequency: 3,
                    next: ""
                }
            },
            "images": [imatges['galetar']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width": 792/RESOLUTION,
                "regX": 0,
                "regY": 0,
                "count": 8
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        galetar = new createjs.BitmapAnimation(array_imatges);
        galetar.x = OFFSET_HORITZONTAL;
        galetar.y = OFFSET_VERTICAL;

        stage.addChild(galetar);
        galetar.addEventListener('animationend', this.handlerPapillar);
        galetar.visible = false;
        //pessigolles.gotoAndPlay("move");
    }
    this.handlerPapillar= function()
    {
        Biribiri.mostraBiriBase();
        Audio.stopAudio();
        Audio.sonaA2();
    }
    this.createPapillar = function ()
    {
        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "menja":{
                    frames: [0,1,2,3,5,6,7,4,5,6,7,4,5,6,7,4,5,6,7],
                    frequency: 3,
                    next: ""
                }
            },
            "images": [imatges['papillar']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width": 792/RESOLUTION,
                "regX": 0,
                "regY": 0,
                "count": 8
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        papillar = new createjs.BitmapAnimation(array_imatges);
        papillar.x = OFFSET_HORITZONTAL;
        papillar.y = OFFSET_VERTICAL;

        stage.addChild(papillar);
        papillar.addEventListener('animationend', this.handlerPapillar);
        papillar.visible = false;
        //pessigolles.gotoAndPlay("move");
    }
    this.handlerPapillar= function()
    {
        Biribiri.mostraBiriBase();
        Audio.stopAudio();
        Audio.sonaA1();
    }
    this.createSonall = function ()
    {
        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "move":{
                    frames: [0,1,2,3,4,2,3,4,2,3,4,2,1,0],
                    frequency: 3,
                    next: ""
                }
            },
            "images": [imatges['sonallar']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width":792/RESOLUTION,
                "regX": 0,
                "regY":0,
                "count": 5
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        sonallar = new createjs.BitmapAnimation(array_imatges);
        sonallar.x = OFFSET_HORITZONTAL;
        sonallar.y = OFFSET_VERTICAL;

        stage.addChild(sonallar);
        sonallar.addEventListener('animationend', this.handlerSonallar);
        sonallar.visible= false;
        //pessigolles.gotoAndPlay("move");
    }
    this.handlerSonallar= function()
    {
        Biribiri.mostraBiriBase();
        Audio.stopAudio();
        Audio.sonaA2();
    }
    this.createTitellar = function ()
    {
        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "juga":{
                    frames: [0,1,2,3,2,3,2,3,2,3,2,1,0],
                    frequency: 4,
                    next: ""
                }
            },
            "images": [imatges['titellar']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width":792/RESOLUTION,
                "regX": 0,
                "regY":0,
                "count": 4
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        titellar = new createjs.BitmapAnimation(array_imatges);
        titellar.x = OFFSET_HORITZONTAL;
        titellar.y = OFFSET_VERTICAL;

        stage.addChild(titellar);
        titellar.addEventListener('animationend', this.handlerTitellar);
        titellar.visible= false;
        //pessigolles.gotoAndPlay("move");
    }
    this.handlerTitellar= function()
    {
        Biribiri.mostraBiriBase();
        Audio.sonaA1();
    }
    this.createPiloteja = function ()
    {
        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "juga":{
                    frames: [0,1,2,3,3,2,1,0],
                    frequency: 4,
                    next: ""
                }
            },
            "images": [imatges['animPilota']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width":792/RESOLUTION,
                "regX": 0,
                "regY":0,
                "count": 4
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        piloteja = new createjs.BitmapAnimation(array_imatges);
        piloteja.x = OFFSET_HORITZONTAL;
        piloteja.y = OFFSET_VERTICAL;

        stage.addChild(piloteja);
        piloteja.addEventListener('animationend', this.handlerPiloteja);
        piloteja.visible= false;
        //pessigolles.gotoAndPlay("move");
    }
    this.handlerPiloteja = function()
    {
        Biribiri.mostraBiriBase();
        Audio.sonaA2();
    }
    this.createConnecta = function ()
    {

        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "juga":{
                    frames: [0,1,1,2,3,3,4,5,5],
                    frequency: 3,
                    next: ""
                }
            },
            "images": [imatges['connecta']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width":792/RESOLUTION,
                "regX": 0,
                "regY":0,
                "count": 6
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        connecta = new createjs.BitmapAnimation(array_imatges);
        connecta.x = OFFSET_HORITZONTAL;
        connecta.y = OFFSET_VERTICAL;

        stage.addChild(connecta);
        connecta.addEventListener('animationend', this.handlerConnecta);
        connecta.visible= false;
        //pessigolles.gotoAndPlay("move");
    }
    this.handlerConnecta = function()
    {
        Biribiri.mostraBiriBase();
        Audio.sonaA1();
    }
    this.createPessigolles = function ()
    {

        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "move":{
                    frames: [0,1,2,3],
                    frequency: 3,
                    next: ""
                }
            },
            "images": [imatges['pessigolles']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width":792/RESOLUTION,
                "regX": 0,
                "regY":0,
                "count": 4
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        pessigolles = new createjs.BitmapAnimation(array_imatges);
        pessigolles.x = OFFSET_HORITZONTAL;
        pessigolles.y = OFFSET_VERTICAL;

        stage.addChild(pessigolles);
        pessigolles.addEventListener('animationend', this.handlerPessigolles);
        pessigolles.visible= false;
        //pessigolles.gotoAndPlay("move");
    }
    this.handlerPessigolles = function()
    {
        Biribiri.mostraBiriBase();
        Audio.stopAudio();
        Audio.sonaA2();

    }
    this.createParpella  =function ()
    {
        var array_imatges = new createjs.SpriteSheet({
            "animations":
            {
                "spin":{
                    frames: [0,1,0,2] ,
                    frequency: 1,
                    next: ""
                }
            },
            "images": [imatges['parpella']],
            "frames":
            {
                "height": 980/RESOLUTION,
                "width":792/RESOLUTION,
                "regX": 0,
                "regY":0,
                "count": 2
                // [625,0,309,314,0,153.3,150.35]
            }
        });

        parpalleig = new createjs.BitmapAnimation(array_imatges);
        parpalleig.x = OFFSET_HORITZONTAL;
        parpalleig.y = OFFSET_VERTICAL;
       // console.log(array_imatges);
        //console.log(parpalleig);

        //createjs.Ticker.setFPS(8);

        stage.addChild(parpalleig);


        parpalleig.gotoAndPlay("spin");
    }
    this.createUlls  =function ()
    {
        ulls = new createjs.Bitmap(imatges['ulls']);
        ulls.x = OFFSET_HORITZONTAL;
        ulls.y = OFFSET_VERTICAL;
        ulls.cache(0, 0,792/RESOLUTION, 980/RESOLUTION);
        stage.addChild(ulls);

    }
    this.createBusto  =function ()
    {
        busto = new createjs.Bitmap(imatges['cap']);
        busto.x = OFFSET_HORITZONTAL;
        busto.y = OFFSET_VERTICAL;
        busto.cache(0, 0,792/RESOLUTION, 980/RESOLUTION);
        stage.addChild(busto);
        busto.addEventListener('mousedown', this.handlerTronco);

    }
    this.createBlanc  =function ()
    {
        blanc = new createjs.Bitmap(imatges['blank']);
        blanc.x = OFFSET_HORITZONTAL;
        blanc.y = OFFSET_VERTICAL;
        blanc.cache(0, 0,792/RESOLUTION, 980/RESOLUTION);
        stage.addChild(blanc);

    }
    this.createVolquer  =function ()
    {
        volquer = new createjs.Bitmap(imatges['volquer']);
        volquer.x = OFFSET_HORITZONTAL;
        volquer.y = OFFSET_VERTICAL;
        volquer.cache(0, 0,792/RESOLUTION, 980/RESOLUTION);
        stage.addChild(volquer);

    }
    this.createBody  =function ()
    {
        if(body == null && body == undefined)
        {
            body = new createjs.Bitmap(imatges['cos']);
            body.x = OFFSET_HORITZONTAL;
            body.y = OFFSET_VERTICAL;
            body.cache(0, 0,792/RESOLUTION, 980/RESOLUTION);
        }
        stage.addChild(body);
        body.addEventListener('mousedown', this.handlerTronco);
    }

    this.handlerTronco  =function ()
    {
        if(Biribiri.animacioPlaying())
        {
            //puntuacio++;


            Biribiri.amagaBiriBase();
            connecta.visible = true;
            connecta.gotoAndPlay("juga");
            Audio.sonaBIRI();
            Pantalla.sumaPunts(1);
            setTimeout(function(){puntuacio++; Pantalla.updateNumPunts();},400);
        }
    }
    this.createCames  =function ()
    {
        cames = new createjs.Bitmap(imatges['cames']);
        cames.x =OFFSET_HORITZONTAL;
        cames.y = OFFSET_VERTICAL;
        cames.cache(0, 0,792/RESOLUTION, 980/RESOLUTION);
        stage.addChild(cames);
        cames.addEventListener('mousedown', this.handlerCames);

    }
    this.handlerCames  =function ()
    {
      // var punts = numPunts.text;
        if(Biribiri.animacioPlaying())
        {
            Biribiri.amagaBiriBase();
            pessigolles.visible = true;
            pessigolles.gotoAndPlay("move");
            Audio.sonaRIU();
            Pantalla.sumaPunts(1);
            setTimeout(function(){puntuacio++; Pantalla.updateNumPunts();},400);
        }
    }
}