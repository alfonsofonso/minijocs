

/// variables

var stage;

///
Main=new function(){


    this.init=function(){

       Main.windowResize();
       Main.initGame();


    }

    this.initGame=function(){

        stage = new createjs.Stage(document.getElementById("mainCanvas"));
        createjs.Touch.enable(stage);

        stage.mousedown=function(){
            alert("e");
        }

    }

    this.windowResize=function(){

        //console.log("windowResize");
        //alert("windows Resize")
        var canvas = $("#mainCanvas");

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




};// fi Main




document.onload=Main.init();
window.addEventListener('resize', Main.windowResize, false);