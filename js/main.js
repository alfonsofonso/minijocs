

/// variables

var stage;
var RESOLUTION=2;
///
Main=new function(){


    this.init=function(){

       Main.windowResize();
       Main.initGame();


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

        //console.log("windowResize");


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