
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

