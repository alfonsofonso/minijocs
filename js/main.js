
<<<<<<< HEAD
var stage;
var RESOLUTION =2;
var compr;
var amp;
var alt;

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

        this.windowResize();

        //createjs.Ticker.setFPS(10);
         createjs.Ticker.addEventListener("tick", this.handlerTick);


    };

    this.idle = function()
    {

    };

    this.windowResize =function ()
    {
        var canvas = $("#mainCanvas");

        ratio =   1440/960;
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
    };

    this.handlerTick =function ()
    {
         stage.update();

    }



};

window.addEventListener('resize', Main.windowResize, false);

=======

/// variables

var stage;
var RESOLUTION=2;
var queue;

///
Main=new function(){


    this.init=function(){

       Main.windowResize();
       Main.initGame();
       Main.loadSound();

    }

    this.loadSound=function(){

        queue = new createjs.LoadQueue();
        queue.installPlugin(createjs.Sound);
        queue.addEventListener("complete", Main.handleComplete);

        queue.loadFile({id:"mySound", src:"audio/fatalThrone.mp3"});

    }

    this.handleComplete=function(){

        createjs.Sound.play("mySound");
    }

    this.initGame=function(){

        stage = new createjs.Stage(document.getElementById("mainCanvas"));
        createjs.Touch.enable(stage);

       var  fons_loader = new createjs.Shape();
        fons_loader.graphics.beginFill("rgba(155,123,255,1)").rect( 0 , 0 , 960/RESOLUTION, 1440/RESOLUTION ); //.drawCircle (50/RESOLUTION, 50/RESOLUTION, 50/RESOLUTION);

        //fons_loader.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        fons_loader.x = 0;
        fons_loader.y = 0;
        stage.addChild(fons_loader);
        stage.update();

        stage.addEventListener("mousedown", function(e){Main.alerta(e,"hola")});

    }


    this.alerta=function(e,m){



        if(navigator.notificaion){
            navigator.notification.alert(m);
        }else{
            alert(m);
        }

    }

    this.windowResize=function(){

        var canvas = $("#mainCanvas");
        //var ratio =   1440/960;

        var height = canvas.css('height').substring(0, canvas.css('height').lastIndexOf('px') );

        if( $(window).height() != height)
        {
            //alert("height")
            canvas.css( 'height', $(window).height()+ 'px' );
            canvas.css( 'width',  $(window).width() + 'px' );
        }

        canvas.css('width', $(window).width()+ 'px');

        $("#background").css('height','100%');
        $("#background").css('width','100%');
    }




};// fi Main




document.onload=Main.init();
window.addEventListener('resize', Main.windowResize, false);
>>>>>>> origin/master
