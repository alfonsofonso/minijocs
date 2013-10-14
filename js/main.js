
var stage;
var Mouse= {x:0,y:0};
var RESOLUTION =2;
var OFFSET_ULLS= 30/ RESOLUTION;

var temps = 0;
var INTERVAL_SMILEY = 60000;
var INTERVAL_PARPELLA = 10000;
var INTERVAL_SAVE_GAME = 120000;
var nextparpella = Math.random() *  INTERVAL_PARPELLA ;
var nextTemps =  INTERVAL_SMILEY;
var nextSave =  INTERVAL_SAVE_GAME;
var puntuacio=0;
var numCopes = 0;
var numMedalles = 0;
var guadar_en_joc = false;

Main = new function()
{
    this.InitGame = function ()
    {

        window.requestAnimFrame =  (function(callback) {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 66);
                };
        })();


            //stage = new createjs.Stage(document.getElementById("mainCanvas"));
        stage.enableMouseOver(15);
        //stage.tickOnUpdate = false;



        createjs.Touch.enable(stage);

        this.windowResize();
        Pantalla.createScreen();
        Biribiri.createBiriBiri();
        //alert(InfoGame.punts);
        //numPunts.text = InfoGame.punts;
        puntuacio = parseInt(InfoGame.punts);
        Pantalla.updateNumPunts();

        var medalles = Math.floor( puntuacio / 100);
        Pantalla.updateNumMedalles(medalles);

        var copes = Math.floor( puntuacio / 200);
        Pantalla.updateNumCopes(copes);

       // console.log(smileyJOC+" - "+smileyMENJA+" - "+smileyDUTXA+" - "+smileyDORM);
        menja_active = false;
        dorm_active = false;
        bany_active = false;

        smileyJOC = InfoGame.emoticJoc;
        smileyMENJA = InfoGame.emoticCuina;
        smileyDUTXA = InfoGame.emoticBany;
        smileyDORM = InfoGame.emoticDorm;

        Main.calculateScore(true);

        Pantalla.lightMenuItem( lastEscena);
        //Pantalla.updateSmiley();
        // stage.addEventListener('stagemousemove', handlerSegueixUlls)
        stage.addEventListener('stagemousedown', this.handlerTick) ;
        //stage.addEventListener('dblclick', idle) ;
        //$("#mainCanvas").mousemove(handlerSegueixUlls);


        //createjs.Ticker.setFPS(10);
        stage.setChildIndex(menu_joc, stage.getNumChildren() - 1);
        stage.setChildIndex(anim_joc, stage.getNumChildren() - 1);
        createjs.Ticker.addEventListener("tick", this.handlerTick);


    }
    this.idle = function()
    {

    }
    this.windowResize =function ()
    {
        var canvas = $("#mainCanvas");
        alert("windowResize canvas= "+canvas);
        var ratio =   1440/960;
        var height = canvas.css('height').substring(0, canvas.css('height').lastIndexOf('px') );
        if( $(window).height() != height)
        {
            canvas.css( 'height', $(window).height()+ 'px' );
            canvas.css( 'width',  ($(window).height() / ratio) + 'px' );
        }

        var width = canvas.css('width').substring(0, canvas.css('width').lastIndexOf('px') );
        if( $(window).width() < width)
        {
            canvas.css('width', $(window).width()+ 'px');
            canvas.css('height', $(window).width() * ratio+'px');
        }
        $("#background").css('height','100%');
    }
    this.handlerTick =function ()
     {

         if(stage.mouseX !=  Mouse.x || Mouse.y != stage.mouseY  )
         {
             Mouse.x = stage.mouseX ;
             Mouse.y = stage.mouseY ;

             Main.calculatePositionUllsX();
             Main.calculatePositionUllsY();
             boca.visible= true;
         }
         else
         {
             boca.visible= false;
         }

         Main.calculateScore(false);
         Main.calculateSmiley();
        // Pantalla.updateSmiley();
         //fps.text = Math.round(createjs.Ticker.getMeasuredFPS()) + " fps";
        // console.log(Math.round(createjs.Ticker.getMeasuredFPS()) + " fps");
         stage.update();

     }

    this.calculateSmiley =function ()
    {
       var temps =  createjs.Ticker.getTime();

       if( temps > nextTemps)
       {
            nextTemps = temps+ INTERVAL_SMILEY;
           // degenerateSmiley(currentEscena);
           Pantalla.degenerateSmiley() ;
       }
        if( temps > nextparpella)
        {
            nextparpella = temps+ Math.random()* INTERVAL_PARPELLA ;
            parpalleig.gotoAndPlay("spin");
        }
        if( temps > nextSave)
        {
            nextSave = temps +  INTERVAL_SAVE_GAME ;
            //Model.saveGame();
        }

    }
    this.onCompleteMedalles =function ()
    {
        Tween.get(medalla).to({scaleX:1, scaleY:1}, 1000).call();
    }
    this.calculateScore =function (inici)
    {
        //puntuacio = numPunts.text;

       InfoGame.punts = puntuacio;

       var medalles = Math.floor( puntuacio / 100);
        if(medalles > numMedalles)
        {
            numMedalles = medalles;
            Pantalla.updateNumMedalles(numMedalles);
        }

       var copes = Math.floor( puntuacio / 200);
       if(copes > numCopes)
       {
           numCopes = copes;
           Pantalla.updateNumCopes(numCopes);
       }
       if( puntuacio >= punts_menja && !menja_active ) {
           if( !inici)
           {
               Pantalla.createAvis(menu_menja.x + 30, menu_menja.y + 30);
               Audio.sonaJOC();
               menja_active = true;
               setTimeout(Pantalla.desblocCuina, 600);
           }
           else
           {
               Pantalla.desblocCuina();
           }
       }
       if( puntuacio >= punts_bany && !bany_active)
       {
           if( !inici)
           {
               Pantalla.createAvis(menu_bany.x + 30, menu_bany.y + 30);
               Audio.sonaJOC();
               bany_active = true;
               setTimeout(Pantalla.desblocBany, 600)
           }
           else
           {
               Pantalla.desblocBany();
           }
       }
       if( puntuacio >= punts_dorm && !dorm_active){

           if( !inici)
           {
               Pantalla.createAvis(menu_dorm.x + 30, menu_dorm.y + 30);
               Audio.sonaJOC();
               dorm_active = true;
               setTimeout(Pantalla.desblocDorm, 600);
           }
           else
           {
               Pantalla.desblocDorm();
           }
       }

        if( puntuacio <100  )  Pantalla.desblocMinijoc(0);
        if( puntuacio >=100 && nivellMinijoc < 1 )
        {
            Pantalla.desblocMinijoc(1);
            if( !inici)
            {
                Pantalla.createAvis(joystick.x , joystick.y + 10);
                Audio.sonaJOC();
            }
        }
        if( puntuacio >=200 && nivellMinijoc < 2  ){
            Pantalla.desblocMinijoc(2);
            if( !inici)
            {
                Pantalla.createAvis(joystick.x , joystick.y + 10);
                Audio.sonaJOC();
            }
        }
       if( puntuacio >=300 && nivellMinijoc < 3  )
       {
           Pantalla.desblocMinijoc(3);
           if( !inici)
           {
               Pantalla.createAvis(joystick.x , joystick.y + 10);
               Audio.sonaJOC();
           }
       }
       if( puntuacio >=400 && nivellMinijoc < 4  )
       {
           Pantalla.desblocMinijoc(4);
           if( !inici)
           {
               Pantalla.createAvis(joystick.x , joystick.y + 10);
               Audio.sonaJOC();
           }
       }

    }

    this.calculatePositionUllsX =function ()
    {
        if(Mouse.y <75/RESOLUTION && ( Mouse.x >500/RESOLUTION ||  Mouse.x <75/RESOLUTION ))  OFFSET_ULLS = 26/RESOLUTION;
        else   OFFSET_ULLS = 30/RESOLUTION;

        if( Mouse.x >575/RESOLUTION)
        {
            ulls.x = OFFSET_HORITZONTAL - Math.sin( -(Mouse.x -575/RESOLUTION)  /((960-575)/RESOLUTION))*OFFSET_ULLS ;
        }
        else  if( Mouse.x <360/RESOLUTION)
        {
            ulls.x = OFFSET_HORITZONTAL -  Math.sin( -(Mouse.x -360/RESOLUTION) /(360/RESOLUTION))*OFFSET_ULLS ;
        }
        else
        {
            ulls.x = OFFSET_HORITZONTAL;
        }

    }

    this.calculatePositionUllsY =function ()
    {
        if(Mouse.y <75/RESOLUTION && ( Mouse.x >500/RESOLUTION ||  Mouse.x <75/RESOLUTION ))  OFFSET_ULLS = 26/RESOLUTION;
        else   OFFSET_ULLS = 30/RESOLUTION;

        if( Mouse.y <580/RESOLUTION)
        {
            ulls.y = OFFSET_VERTICAL - Math.sin( -(Mouse.y -580/RESOLUTION) /(580/RESOLUTION))*OFFSET_ULLS ;
        }
        else  if( Mouse.y >580/RESOLUTION)
        {
            ulls.y = OFFSET_VERTICAL -  Math.sin( -(Mouse.y -580/RESOLUTION) /((1440-580)/RESOLUTION))*OFFSET_ULLS ;
        }

    }
}
window.addEventListener('resize', Main.windowResize, false);
//window.addEventListener('beforeunload',  Model.saveLocalGame, false);
