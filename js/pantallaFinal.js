/**
 * Created with JetBrains WebStorm.
 * User: Jordi Borrell
 * Date: 17/09/13
 * Time: 12:47
 * To change this template use File | Settings | File Templates.
 */

var fons_final;
var bt_tancar_final;
var biribiri_final;
var bt_print;
var bt_save;

var title;

Final = new  function()
{
    this.initMenu =function ()
    {
        Final.cleanStage();
        Final.createFons();
        Final.createEstrellesLlunes();
        Final.BiribiriBotons();
        Final.createTexts();

        stage.update();
        createjs.Ticker.addEventListener("tick", Final.handleTemps);
    }
    this.handleTemps = function()
    {
        stage.update();
    }
    this.cleanStage = function()
    {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", Main.handlerTick);
        stage.removeEventListener('stagemousedown', Main.handlerTick) ;

        InfoGame.emoticJoc = smileyJOC ;
        InfoGame.emoticCuina = smileyMENJA;
        InfoGame.emoticBany = smileyDUTXA;
        InfoGame.emoticDorm = smileyDORM;

    }
    this.handlertancar = function()
    {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", Final.handleTemps);
        Main.InitGame();
    }
    this.createFons = function()
    {
        if( fons_final == null || fons_final == undefined )
        {
            fons_final = new createjs.Bitmap(imatges['base_final']);
            fons_final.x = 0;
            fons_final.y = 0;
            fons_final.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(fons_final);
        if( bt_tancar_final == null || bt_tancar_final == undefined )
        {
            bt_tancar_final = new createjs.Bitmap(imatges['botoCLOSE']);
            bt_tancar_final.x = 825/RESOLUTION;
            bt_tancar_final.y = 14/RESOLUTION;
            bt_tancar_final.cache(0, 0, 116/RESOLUTION, 116/RESOLUTION);
        }

        stage.addChild(bt_tancar_final);
        bt_tancar_final.addEventListener('click', Final.handlertancar );
    }

    /*
    imatges['estrella'] =  event.result;

    imatges['planeta'] =  event.result;

    imatges['nom_biri'] =  event.result; */
    this.recalculetaPosition= function(element)
    {
        var sol = Math.ceil(Math.random()*5)
        switch(sol)
        {
            case 1:
            case 2:
                element.y = Math.random()*530/RESOLUTION ;
                break;
            case 3:
                element.y = 1000 + Math.random()*200/RESOLUTION ;
                break;
            case 4:
                element.x = Math.random()*270/RESOLUTION ;
                break;
            case 5: element.x = 760+Math.random()*140/RESOLUTION ;
                break;
        }
    }
    this.createEstrellesLlunes = function()
    {
         for(var llun=0; llun < numCopes && llun < 5; llun++)
         {
             var lluna = new createjs.Bitmap(imatges['planeta'+(llun+1)]);
             lluna.x = 0; //Math.random()*900/RESOLUTION ;
             lluna.y = 0; //Math.random()*1200/RESOLUTION ;
            // lluna.scaleX = lluna.scaleY = 0.4 + Math.random()*0.6 ;

            /* if(lluna.x >270/RESOLUTION && lluna.x <760/RESOLUTION &&
                 lluna.y<1000/RESOLUTION && lluna.y>530/RESOLUTION )
             {
                 Final.recalculetaPosition(lluna);
             }  */
             stage.addChild(lluna);
         }
         for(var est=0; est < numMedalles && est < 30 ; est++)
         {
             var estrella = new createjs.Bitmap(imatges['estel'+(est+1)]);
             estrella.x = 0; //Math.random()*900/RESOLUTION ;
             estrella.y = 0; //Math.random()*1200/RESOLUTION ;
             //estrella.scaleX = estrella.scaleY = 0.3 + Math.random()*0.7 ;

            /* if(estrella.x >270/RESOLUTION && estrella.x <760/RESOLUTION &&
                 estrella.y<1000/RESOLUTION && estrella.y>530/RESOLUTION )
             {
                 Final.recalculetaPosition(estrella);
             }  */
             stage.addChild(estrella);
         }

    }
    this.BiribiriBotons = function()
    {
        if( biribiri_final == null || biribiri_final == undefined )
        {
            biribiri_final = new createjs.Bitmap(imatges['BIRIhappy']);
            biribiri_final.x = 0;
            biribiri_final.y = 0;
            biribiri_final.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(biribiri_final);

        if( bt_print == null || bt_print == undefined )
        {
            bt_print = new createjs.Bitmap(imatges['botoPRINT']);
            bt_print.x = 0;
            bt_print.y = 0;
            bt_print.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(bt_print);
        bt_print.addEventListener('click', Final.handlerPrint);

        if( bt_save == null || bt_save == undefined )
        {
            bt_save = new createjs.Bitmap(imatges['botoSAVE']);
            bt_save.x =0;
            bt_save.y = 0;
            bt_save.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(bt_save);
        bt_save.addEventListener('click', Final.handlerSave);
    }
    this.createTexts = function()
    {
        console.log("nom: "+InfoGame.nomBiriBiri);
        var text1 = new createjs.Text(InfoGame.nomBiriBiri, 160/RESOLUTION+"px BoldinaScript", "#9A0012");
        text1.x = 130/RESOLUTION;
        text1.y = 320/RESOLUTION;
        //text1.textAlign = "center";
        //text.outline = true;

        text1.textBaseline = "alphabetic";
        stage.addChild(text1);

        var text3 = new createjs.Text(InfoGame.nomBiriBiri, 160/RESOLUTION+"px BoldinaScript", "#F3C949");
        text3.x = 130/RESOLUTION;
        text3.y = 320/RESOLUTION;
        text3.outline = true;
        text3.outlineWidth = "50px";

        text3.textBaseline = "alphabetic";
        //text3.textAlign = "center";
        stage.addChild(text3);

        /*var ctx=document.getElementById("mainCanvas").getContext("2d");

        ctx.font="40px bold Arial";
        ctx.fillText("Hello World!",10,50); */



        var text = new createjs.Text("tens "+puntuacio+" punts", 80/RESOLUTION+"px saunabold", "#fff");
        text.x = 250/RESOLUTION;
        text.y = 400/RESOLUTION;
        //text.outline = true;
        text.textBaseline = "alphabetic";
        stage.addChild(text);

       /* var text4 = new createjs.Text("tens "+puntuacio+" punts", 80/RESOLUTION+"px saunabold", "#080143");
        text4.x = 250/RESOLUTION;
        text4.y = 400/RESOLUTION;
        text4.outline = true;
        text4.textBaseline = "alphabetic";
        stage.addChild(text4);  */

        var text2 = new createjs.Text(numCopes+" Llun"+((numCopes==1)? "a" : "es") +" i "+numMedalles+" Estrell"+((numMedalles==1)? "a" : "es") +"!", 80/RESOLUTION+"px saunabold", "#fff");
        text2.x = 115/RESOLUTION;
        text2.y = 1200/RESOLUTION;
        text2.textBaseline = "alphabetic";
        stage.addChild(text2);

       /* var text5 = new createjs.Text("¡"+numCopes+" Llun"+((numCopes==1)? "a" : "es") +" i "+numMedalles+" Estrell"+((numMedalles==1)? "a" : "es") +"!", 80/RESOLUTION+"px saunabold", "#fff");
        text5.x = 60/RESOLUTION;
        text5.y = 1200/RESOLUTION;
        text5.outline = true;
        text5.textBaseline = "alphabetic";
        stage.addChild(text5);  */
    }
    this.handlerPrint = function()
    {
        window.print();
    }
    this.handlerSave = function()
    {
        guadar_en_joc = true;
        var popup = $('.hidden .popup-registrat').clone();
        $('.canvasHolder .popup').remove();
        $('.canvasHolder .innerWrapper').append(popup);
        $('.canvasHolder .popup-registrat').fadeIn(200);
        /*
        Model.saveGame();
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", Final.handleTemps);
        Main.InitGame();  */
    }
}
