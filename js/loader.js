
var preload;
var manifest;
var imatges= new Array();
var sons = new Array();
var NUM_AUDIOS = 1;
var NUM_IMATGES = 2 ;//+ NUM_AUDIOS;
var loaded_imatges = 0;
var percent;
var carregant;
var fons_loader;

Loader = new function() {


    this.initLoad = function (){

        Main.windowResize();
        amp=480//$('#mainCanvas').css('width').substr(0,$('#mainCanvas').css('width').lastIndexOf('px'));
        alt=720//$('#mainCanvas').css('height').substr(0,$('#mainCanvas').css('height').lastIndexOf('px'));
        Loader.createCounter();
        Loader.reload();

    }


    this.createCounter = function ()
    {
        stage = new createjs.Stage(document.getElementById("mainCanvas"));
        createjs.Touch.enable(stage);

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



        $("#background").css('background-color','black');

    }


    // Reset everything
    this.reload = function () {
        // If there is an open preload queue, close it.
        if (preload != null){ preload.close(); }
        //
        // Push each item into our manifest
        manifest = [
            //entorn
             "fons.png",

            "bot.png"

        ];

        // Create a preloader. There is no manifest added to it up-front, we will add items on-demand.
        //if(RESOLUTION == 1) preload = new createjs.LoadQueue(true, "img_gran/");
        if(RESOLUTION == 2) preload = new createjs.LoadQueue(false, "img_mig/");
       // if(RESOLUTION == 4) preload = new createjs.LoadQueue(true, "img_petit/");

        // Use this instead to use tag loading
        //preload = new createjs.LoadQueue(false);

        preload.addEventListener("fileload", Loader.handleFileLoad);
        preload.addEventListener("progress", Loader.handleOverallProgress);
        preload.addEventListener("fileprogress", Loader.handleFileProgress);
        preload.addEventListener("error",Loader.handleFileError);
        preload.setMaxConnections(500);

        Loader.loadAll();
    }

    this.stop = function () {
        if (preload != null) { preload.close(); }
    }

    this.loadAll = function () {
        console.log("loaded images "+manifest.length);
        while (manifest.length > 0) {
            Loader.loadAnother();
        }

    }

    this.loadAnother = function () {
        // Get the next manifest item, and load it
        console.log("loadAnoder")
        var item = manifest.shift();
        preload.loadFile(item);
        // If we have no more items, disable the UI.
        if (manifest.length == 0) {

        }
    }

    // File complete handler
    this.handleFileLoad = function (event) {

        //console.log("Imatge: "+ event.item.src+" Pujada. ");
        switch(event.item.src)
        {
            case "fons.png": imatges['fons'] =  event.result;
                break;

            case "bot.png": imatges['bot1'] =  event.result;
                break;
        }

        loaded_imatges++;

        console.log("loaded",loaded_imatges,"num",NUM_IMATGES);
        if( loaded_imatges == NUM_IMATGES )
        {
            Main.InitGame();
          // stage.removeChild( fons_loader );
            stage.removeAllChildren();
            Menu.initMenu();
            console.log("dale")
        }

    }

    // File progress handler
    this.handleFileProgress = function (event) {
        console.log("Imatge: "+ event.item.src+" -  progres: "+ preload.progress );
    }

    // Overall progress handler
    this.handleOverallProgress = function (event) {

        console.log("imatges",imatges);
        percent.text = Math.floor(loaded_imatges*100/NUM_IMATGES)+"%";
        stage.update();

    }

    // An error happened on a file
    this.handleFileError = function (event) {

        alert("error",event);
    }


};//fin loader