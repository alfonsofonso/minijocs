/**
 * Created with JetBrains WebStorm.
 * User: Jordi Borrell
 * Date: 16/07/13
 * Time: 11:42
 * To change this template use File | Settings | File Templates.
 */

var background;
var background1;
var background2;
var background3;
var background4;
var currentBackground;
var currentEscena = "JOC";
var lastEscena =4;

var menu_dorm;
var menu_menja;
var menu_joc;
var menu_bany;


var smileyJOC = 5;
var smileyMENJA = 5;
var smileyDUTXA = 5;
var smileyDORM = 5;

var anim_dorm;
var anim_menja ;
var anim_joc;
var anim_bany ;

var dorm_active=false;
var menja_active=false;
var bany_active=false;

var papilla;
var bibero;
var galeta;
var os;
var xumet;
var manteta;
var titella;
var pilota;
var sonall;
var esponja;
var dutxa;
var sabo;

var drag_item;
var drag_X;
var drag_Y;

var barra_inferior;
var barra_dreta;
var barra_esquerra;

var info;
var opcions;
var jocs;
var enrera;
var guardar;
var btOK;
var btAjudaOK;
var btdesartanca;
var desar;
var btdesar;
var punts;
var punts_menja = 10;
var punts_bany = 20;
var punts_dorm = 30;
var joystick;
var copa;
var medalla;

var puntsArray = new Array();
var unitats;
var desenes;
var centenes;
var milers;
var deumilers;
var centmilers;

var estrellesArray = new Array();
var unitatsM;
var desenesM;
var centenesM;
var milersM;


var llunesArray = new Array();
var unitatsC;
var desenesC;
var centenesC;
var milersC;

var puntsAuxArray = new Array();

var ensabonar = false;
var neteja= false;
var bombolles = new Array();

var fps;
var fontSize = 50;

var nivellMinijoc=0;
var isDragging = false;

var cookiesi;
var cookieno;
var accepta_cookie;
var torna_cookie;

var avis;

Pantalla=new  function() {
    this.createScreen =function ()
    {
        alert("Pantalla.createScreen");
        Pantalla.createBackground();
        //Pantalla.createFPS();
        Pantalla.createBarres();
        //createSubMenuBany();
        switch(lastEscena)
        {
            case 1: Pantalla.createSubMenuBany(); break;
            case 2: Pantalla.createSubMenuMenja(); break;
            case 3: Pantalla.createSubMenuDorm(); break;
            case 4: Pantalla.createSubMenuJoc(); break;

        }

        Pantalla.createMenu();


        createjs.Ticker.removeEventListener("tick", Main.handlerTick);
        //stage.update();
    }
    this.createFPS =function  ()
    {
        if( fps == null || fps == undefined )
        {
            fps = new createjs.Text("0", "bold "+(fontSize/RESOLUTION)+"px Arial", "#111111");
            fps.textBaseline = "alphabetic";
            fps.y = 250/RESOLUTION;
            fps.x = 10/RESOLUTION;
        }
        stage.addChild(fps);
    }
    this.createMenu = function ()
    {
        Pantalla.createMenuDorm();
        Pantalla.createMenuMenja();
        Pantalla.createMenuJocs();
        Pantalla.createMenuBany();

    }
    this.desblocDorm  = function ()
    {
       // if(!dorm_active )
       // {
            dorm_active = true;
            stage.removeChild(menu_dorm);
            menu_dorm = new createjs.Bitmap(imatges['menu_dorm']);
            menu_dorm.x = 711/RESOLUTION;
            menu_dorm.cache(0, 0,257/RESOLUTION, 185/RESOLUTION);
            menu_dorm.alpha = 0.7;

            stage.addChild(menu_dorm);

            stage.removeChild(anim_dorm);
            anim_dorm = new createjs.Bitmap(imatges['cara'+smileyDORM]);
            anim_dorm.x = 744/RESOLUTION;
            anim_dorm.y = -15/RESOLUTION;
            anim_dorm.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
            anim_dorm.alpha = 0.7;

            menu_dorm.addEventListener('mousedown', Pantalla.handlerMenuDorm);
            anim_dorm.addEventListener('mousedown',  Pantalla.handlerMenuDorm);
            stage.addChild(anim_dorm);
       // }
    }
this.desblocMinijoc = function(minijoc)
{
    nivellMinijoc = minijoc;
}
this.createMenuDorm  = function ()
    {
   // if( menu_dorm == null || menu_dorm == undefined )
   // {
        if( menu_dorm != null && menu_dorm != undefined)  stage.removeChild(menu_dorm);
        menu_dorm = new createjs.Bitmap(imatges['dorm_off']);
        menu_dorm.x = 711/RESOLUTION;
        menu_dorm.y = 0/RESOLUTION;
        menu_dorm.cache(0, 0,257/RESOLUTION, 185/RESOLUTION);
        menu_dorm.alpha = 0.7;
   // }
    stage.addChild(menu_dorm);

   // if( anim_dorm == null || anim_dorm == undefined )
   // {
        if( anim_dorm != null && anim_dorm != undefined)  stage.removeChild(anim_dorm);
        anim_dorm = new createjs.Bitmap(imatges['cara_off']);
        anim_dorm.x = 744/RESOLUTION;
        anim_dorm.y = -15/RESOLUTION;
        anim_dorm.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
        anim_dorm.alpha = 0.7;
   // }
    stage.addChild(anim_dorm);

}
this.handlerMenuDorm  = function ()
{
        Pantalla.lightMenuItem(3);
        Pantalla.updateBackground(3) ;
        Pantalla.createSubMenuDorm();
        Audio.sonaENTORN();
}
this.createSubMenuDorm  = function ()
{
    Pantalla.eliminaObjectes();
    Pantalla.createXumet();
    Pantalla.createOs();
    Pantalla.createManteta();
}
this.createManteta  = function  ()
{
    if( manteta == null || manteta == undefined )
    {
        manteta = new createjs.Bitmap(imatges['maneta']);
        manteta.x = 625/RESOLUTION;
        manteta.y = 1175/RESOLUTION;
        manteta.cache(0, 0, 239/RESOLUTION, 222/RESOLUTION);
    }

    manteta.addEventListener('click',  this.handlerManteta);
    manteta.addEventListener('mousedown',  Pantalla.handlerDragItem);
    stage.addChild(manteta);
}
this.handlerManteta  = function ()

{
    if(Biribiri.animacioPlaying())
    {
        manteta.removeEventListener('tick', Pantalla.handlerDragMove);
        manteta.x = 625/RESOLUTION;
        manteta.y = 1175/RESOLUTION;

        Pantalla.incrementalTWO();
        mantetar.visible= true;
        Biribiri.amagaBiriBase();
        mantetar.gotoAndPlay("move");
        Pantalla.improveSmiley('DORM');
        Audio.sonaOBJ();
    }
}
this.createOs  = function  ()
{
    if( os == null || os == undefined )
    {
        os = new createjs.Bitmap(imatges['os']);
        os.x = 365/RESOLUTION;
        os.y = 1150/RESOLUTION;
        os.cache(0, 0, 246/RESOLUTION, 258/RESOLUTION);
    }

    os.addEventListener('click',  this.handlerOs);
    os.addEventListener('mousedown',  Pantalla.handlerDragItem);
    stage.addChild(os);
}
this.handlerOs  = function ()
{
    if(Biribiri.animacioPlaying())
    {
        os.removeEventListener('tick', Pantalla.handlerDragMove);
        os.x = 365/RESOLUTION;
        os.y = 1150/RESOLUTION;

        Pantalla.incrementalTWO();
        ossetar.visible= true;
        Biribiri.amagaBiriBase();
        ossetar.gotoAndPlay("move");
        Pantalla.improveSmiley('DORM');
        Audio.sonaOBJ();
    }
}
this.createXumet  = function  ()
{
    if( os == null || os == undefined )
    {
        xumet = new createjs.Bitmap(imatges['xumet']);
        xumet.x = 130/RESOLUTION;
        xumet.y = 1200/RESOLUTION;
        xumet.cache( 0, 0, 177/RESOLUTION, 178/RESOLUTION);
    }

    xumet.addEventListener('click',  this.handlerXumet);
    xumet.addEventListener('mousedown',  Pantalla.handlerDragItem);
    stage.addChild(xumet);
}
this.handlerXumet  = function ()
{
    if(Biribiri.animacioPlaying())
    {
        xumet.removeEventListener('tick', Pantalla.handlerDragMove);
        xumet.x = 130/RESOLUTION;
        xumet.y = 1200/RESOLUTION;

        Pantalla.incrementalTWO();
        xumetar.visible= true;
        Biribiri.amagaBiriBase();
        xumetar.gotoAndPlay("move");
        Pantalla.improveSmiley('DORM');
        Audio.sonaXUMET();
    }
}
this.activeEntorns = function()
{
    if( puntuacio >= punts_menja  )
    {
        menu_menja.addEventListener('mousedown',  this.handlerMenuMenja);
        anim_menja.addEventListener('mousedown',  this.handlerMenuMenja);
    }

    if( puntuacio >= punts_bany)
    {
        anim_bany.addEventListener('mousedown', this.handlerMenuBany);
        menu_bany.addEventListener('mousedown',  this.handlerMenuBany);
    }

    if( puntuacio >= punts_dorm )
    {
        menu_dorm.addEventListener('mousedown',  this.handlerMenuMenja);
        anim_dorm.addEventListener('mousedown',  this.handlerMenuMenja);
    }
}
this.desblocCuina  = function ()
{
    //if( !menja_active)
    //{
        menja_active = true;
        stage.removeChild(menu_menja);
        menu_menja = new createjs.Bitmap(imatges['menu_menja']);
        menu_menja.x = 232/RESOLUTION;
        menu_menja.y = 0/RESOLUTION;
        menu_menja.cache(0, 0,257/RESOLUTION, 185/RESOLUTION);
        menu_menja.alpha = 0.7;
        stage.addChild(menu_menja);

        stage.removeChild(anim_menja);
        anim_menja = new createjs.Bitmap(imatges['cara'+smileyMENJA]);
        anim_menja.x = 265/RESOLUTION;
        anim_menja.y = -15/RESOLUTION;
        anim_menja.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
        anim_menja.alpha = 0.7;
        stage.addChild(anim_menja);

        menu_menja.addEventListener('mousedown',  Pantalla.handlerMenuMenja);
        anim_menja.addEventListener('mousedown',  Pantalla.handlerMenuMenja);

   // }
}
this.createMenuMenja  = function ()
{
   // if( menu_menja == null || menu_menja == undefined )
    //{
        if( menu_menja != null && menu_menja != undefined)  stage.removeChild(menu_menja);
        menu_menja = new createjs.Bitmap(imatges['menjar_off']);
        menu_menja.x = 232/RESOLUTION;
        menu_menja.y = 0/RESOLUTION;
        menu_menja.cache(0, 0,257/RESOLUTION, 185/RESOLUTION);
        menu_menja.alpha = 0.7;
   // }
   // if( anim_menja == null || anim_menja == undefined )
   // {
         if( anim_menja != null && anim_menja != undefined)  stage.removeChild(anim_menja);
        anim_menja = new createjs.Bitmap(imatges['cara_off']);
        anim_menja.x = 265/RESOLUTION;
        anim_menja.y = -15/RESOLUTION;
        anim_menja.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
        anim_menja.alpha = 0.7;
  //  }

    stage.addChild(menu_menja);
    stage.addChild(anim_menja);
}
this.handlerMenuMenja  = function ()
{
        Pantalla.lightMenuItem(2);
        Pantalla.updateBackground(2) ;
        Pantalla.createSubMenuMenja();
        Audio.sonaENTORN();
    //stage.update();

}

this.eliminaObjectes  = function  ()
{
    stage.removeChild(papilla);
    stage.removeChild(bibero);
    stage.removeChild(galeta);
    stage.removeChild(os);
    stage.removeChild(xumet);
    stage.removeChild(manteta);
    stage.removeChild(pilota);
    stage.removeChild(sonall);
    stage.removeChild(titella);
    stage.removeChild(esponja);
    stage.removeChild(dutxa);
    stage.removeChild(sabo);

}
this.createSubMenuMenja  = function ()
{
    Pantalla.eliminaObjectes();
    Pantalla.createBibero();
    Pantalla.createPapilla();
    Pantalla.createGaleta();
}
this.createGaleta  = function  ()
{
    if( galeta == null || galeta == undefined )
    {
        galeta = new createjs.Bitmap(imatges['galeta']);
        galeta.x = 670/RESOLUTION;
        galeta.y = 1225/RESOLUTION;
        galeta.cache(0, 0, 146/RESOLUTION, 156/RESOLUTION);
    }

    galeta.addEventListener('click',  this.handlerGaleta);
    galeta.addEventListener('mousedown',  Pantalla.handlerDragItem);
    stage.addChild(galeta);
}
this.handlerGaleta  = function ()
{
    if(Biribiri.animacioPlaying())
    {
        galeta.removeEventListener('tick', Pantalla.handlerDragMove);
        galeta.x = 670/RESOLUTION;
        galeta.y = 1225/RESOLUTION;

        Pantalla.incrementalTWO();
        galetar.visible= true;
        //bandeja.visible= false;
        Biribiri.amagaBiriBase();
        galetar.gotoAndPlay("menja");
        Pantalla. improveSmiley('MENJA');
        Audio.sonaXUMET();
    }
}
this.createPapilla  = function  ()
{
    if( papilla == null || papilla == undefined )
    {
        papilla = new createjs.Bitmap(imatges['papilla']);
        papilla.x = 375/RESOLUTION;
        papilla.y = 1250/RESOLUTION;
        papilla.cache(0, 0, 237/RESOLUTION, 149/RESOLUTION);
    }

    papilla.addEventListener('click',  this.handlerPapilla);
    papilla.addEventListener('mousedown',  Pantalla.handlerDragItem);
    stage.addChild(papilla);
}
this.handlerPapilla  = function ()
{
    if(Biribiri.animacioPlaying())
    {
        papilla.removeEventListener('tick', Pantalla.handlerDragMove);
        papilla.x = 375/RESOLUTION;
        papilla.y = 1250/RESOLUTION;

        Pantalla.incrementalTWO();
        papillar.visible= true;
        //bandeja.visible= false;
        Biribiri.amagaBiriBase();
        papillar.gotoAndPlay("menja");
        Pantalla.improveSmiley('MENJA');
        Audio.sonaXUMET();
    }
}
this.createBibero  = function  ()
{
    if( bibero == null || bibero == undefined )
    {
        bibero = new createjs.Bitmap(imatges['bibero']);
        bibero.x = 150/RESOLUTION;
        bibero.y = 1175/RESOLUTION;
        bibero.cache(0, 0, 146/RESOLUTION, 248/RESOLUTION);
    }

    bibero.addEventListener('click',  this.handlerBibero);
    bibero.addEventListener('mousedown',  Pantalla.handlerDragItem);
    stage.addChild(bibero);
}
this.handlerBibero  = function ()
{
    if(Biribiri.animacioPlaying())
    {
        bibero.removeEventListener('tick', Pantalla.handlerDragMove);
        bibero.x = 150/RESOLUTION;
        bibero.y = 1175/RESOLUTION;

        Pantalla.incrementalTWO();
        biberar.visible= true;
       // bandeja.visible= false;
        Biribiri.amagaBiriBase();
        biberar.gotoAndPlay("move");
        Pantalla.improveSmiley('MENJA');
        Audio.sonaXUMET();
    }
}
this.createMenuJocs  = function ()
{
   // if( menu_joc == null || menu_joc == undefined )
    //{
        if( menu_joc != null && menu_joc != undefined)  stage.removeChild(menu_joc);
        menu_joc = new createjs.Bitmap(imatges['jugar_on']);
        menu_joc.x = 0/RESOLUTION;
        menu_joc.y = 0/RESOLUTION;
        menu_joc.cache(0,0,257/RESOLUTION, 185/RESOLUTION);
        menu_joc.addEventListener('mousedown',  this.handlerMenuJoc);
        menu_joc.alpha= 1;
   // }

   // if( anim_joc == null || anim_joc == undefined )
   // {
        if( anim_joc != null && anim_joc != undefined )  stage.removeChild(anim_joc);
        anim_joc = new createjs.Bitmap(imatges['cara5']);
        anim_joc.x = 23/RESOLUTION;
        anim_joc.y = -15/RESOLUTION;
        anim_joc.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
        anim_joc.addEventListener('mousedown',  this.handlerMenuJoc);
    //}
    stage.addChild(menu_joc);
    stage.addChild(anim_joc);

}
this.handlerMenuJoc  = function ()
{
    Audio.sonaENTORN();
    Pantalla.lightMenuItem(4);
    Pantalla.updateBackground(4) ;
    Pantalla.createSubMenuJoc();
   // stage.update();
}
this.createSubMenuJoc  = function ()
{
    Pantalla.eliminaObjectes();
    Pantalla.createSonall();
    Pantalla.createPilota();
    Pantalla.createTitella();
}
this.createTitella  = function  ()
{
    if( titella == null || titella == undefined )
    {
        titella = new createjs.Bitmap(imatges['titella']);
        titella.x = 670/RESOLUTION;
        titella.y = 1200/RESOLUTION;
        titella.cache(0, 0, 163/RESOLUTION, 218/RESOLUTION);
    }
    titella.addEventListener('click',  this.handlerTitella);
    titella.addEventListener('mousedown',  Pantalla.handlerDragItem);
    //titella.addEventListener('pressup',  Pantalla.handlerDragEnd);

    stage.addChild(titella);
}
this.handlerTitella  = function ()
{
    if(Biribiri.animacioPlaying())
    {
        titella.removeEventListener('tick', Pantalla.handlerDragMove);
        titella.x = 670/RESOLUTION;
        titella.y = 1200/RESOLUTION;

        Pantalla.incrementalTWO();
        titellar.visible= true;
        Biribiri.amagaBiriBase();
        titellar.gotoAndPlay("juga");
        Pantalla.improveSmiley('JOC');
        Audio.sonaOBJ();
    }
}
this.createPilota  = function  ()
{
    if( pilota == null || pilota == undefined )
    {
        pilota = new createjs.Bitmap(imatges['pilota']);
        pilota.x = 400/RESOLUTION;
        pilota.y = 1210/RESOLUTION;
        pilota.cache(0, 0, 180/RESOLUTION, 201/RESOLUTION);
    }
    pilota.addEventListener('click',  this.handlerPilota);
    pilota.addEventListener('mousedown',  Pantalla.handlerDragItem);
   // pilota.addEventListener('pressup',  Pantalla.handlerDragEnd);

    stage.addChild(pilota);
}
this.handlerDragEnd = function (event)
{
    alert("hola");
    drag_item = event.target;
    drag_item.removeEventListener('mousedown',  Pantalla.handlerDragItem);

    if(drag_item == pilota) Pantalla.handlerPilota();
    if(drag_item == sonall) Pantalla.handlerSonall();
    if(drag_item == titella) Pantalla.handlerTitella();
    if(drag_item == galeta ) Pantalla.handlerGaleta();
    if(drag_item == papilla) Pantalla.handlerPapilla();
    if(drag_item == bibero) Pantalla.handlerBibero();
    if(drag_item == esponja) Pantalla.handlerEsponja();
    if(drag_item == sabo) Pantalla.handlerSabo();
    if(drag_item == dutxa) Pantalla.handlerDutxa();
    if(drag_item == os) Pantalla.handlerOs();
    if(drag_item == manteta) Pantalla.handlerManteta();
    if(drag_item == xumet) Pantalla.handlerXumet();
}
this.handlerDragItem  = function (event)
{
    if(Biribiri.animacioPlaying())
    {
        drag_item = event.target;
        drag_X =  stage.mouseX -drag_item.x;
        drag_Y =  stage.mouseY - drag_item.y;
        drag_item.addEventListener('tick', Pantalla.handlerDragMove);
        stage.setChildIndex(drag_item, stage.getNumChildren()-1);
    }
}
this.handlerDragMove = function(event)
{
    drag_item = event.target;

    drag_item.x = stage.mouseX - drag_X;
    drag_item.y = stage.mouseY - drag_Y;
    if(Biribiri.tocaBiribiri())
    {
        if(drag_item == pilota) Pantalla.handlerPilota();
        if(drag_item == sonall) Pantalla.handlerSonall();
        if(drag_item == titella) Pantalla.handlerTitella();
        if(drag_item == galeta ) Pantalla.handlerGaleta();
        if(drag_item == papilla) Pantalla.handlerPapilla();
        if(drag_item == bibero) Pantalla.handlerBibero();
        if(drag_item == esponja) Pantalla.handlerEsponja();
        if(drag_item == sabo) Pantalla.handlerSabo();
        if(drag_item == dutxa) Pantalla.handlerDutxa();
        if(drag_item == os) Pantalla.handlerOs();
        if(drag_item == manteta) Pantalla.handlerManteta();
        if(drag_item == xumet) Pantalla.handlerXumet();

    }
}

this.handlerPilota  = function ()
{

    if(Biribiri.animacioPlaying())
    {
        pilota.removeEventListener('tick', Pantalla.handlerDragMove);
        pilota.x = 400/RESOLUTION;
        pilota.y = 1210/RESOLUTION;

        Pantalla.incrementalTWO();
        piloteja.visible = true;

        Biribiri.amagaBiriBase();
        piloteja.gotoAndPlay("juga");
        Pantalla.improveSmiley('JOC');
        Audio.sonaPILOTA();
        window.setTimeout( Audio.sonaPILOTA, 1000);
    }
}
this.createSonall  = function  ()
{
    if( sonall == null || sonall == undefined )
    {
        sonall = new createjs.Bitmap(imatges['sonall']);
        sonall.x = 145/RESOLUTION;
        sonall.y = 1200/RESOLUTION;
        sonall.cache(0, 0, 146/RESOLUTION, 194/RESOLUTION);
    }

    sonall.addEventListener('click',  this.handlerSonall);
    sonall.addEventListener('mousedown',  Pantalla.handlerDragItem);
    //sonall.addEventListener('pressup',  Pantalla.handlerDragEnd);
    stage.addChild(sonall);
}
this.handlerSonall  = function handlerSonall()
{
    if(Biribiri.animacioPlaying())
    {
        sonall.removeEventListener('tick', Pantalla.handlerDragMove);
        sonall.x = 145/RESOLUTION;
        sonall.y = 1200/RESOLUTION;

        Pantalla.incrementalTWO();
        sonallar.visible = true;
        Biribiri.amagaBiriBase();
        sonallar.gotoAndPlay("move");
        Pantalla.improveSmiley('JOC');
        Audio.sonaSONALL();
    }
}

this.desblocBany  = function ()
{
   // if( !bany_active )
   // {
        bany_active=true;
        stage.removeChild(menu_bany);
        menu_bany = new createjs.Bitmap(imatges['menu_bany']);
        menu_bany.x = 469/RESOLUTION;
        menu_bany.y = 0/RESOLUTION;
        menu_bany.cache(0, 0,257/RESOLUTION, 185/RESOLUTION);
        menu_bany.alpha = 0.7;
        stage.addChild(menu_bany);

        stage.removeChild(anim_bany);
        anim_bany = new createjs.Bitmap(imatges['cara'+smileyDUTXA]);
        anim_bany.x = 502/RESOLUTION;
        anim_bany.y = -15/RESOLUTION;
        anim_bany.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
        anim_bany.alpha = 0.7;
        stage.addChild(anim_bany);

        anim_bany.addEventListener('mousedown', Pantalla.handlerMenuBany);
        menu_bany.addEventListener('mousedown',  Pantalla.handlerMenuBany);
   // }
}
this.createMenuBany  = function ()
{
    //if( menu_bany == null || menu_bany == undefined )
    //{
        if( menu_bany != null && menu_bany != undefined)  stage.removeChild(menu_bany);
        menu_bany = new createjs.Bitmap(imatges['bany_off']);
        menu_bany.x = 469/RESOLUTION;
        menu_bany.cache(0, 0,257/RESOLUTION, 185/RESOLUTION);
        menu_bany.alpha = 0.7;

    //}
    //if( anim_bany == null || anim_bany == undefined )
   // {

        if( anim_bany != null && anim_bany != undefined)  stage.removeChild(anim_bany);
        anim_bany = new createjs.Bitmap(imatges['cara_off']);
        anim_bany.x = 502/RESOLUTION;
        anim_bany.y = -15/RESOLUTION;
        anim_bany.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
        anim_bany.alpha=0.7;
   // }


    stage.addChild(menu_bany);
    stage.addChild(anim_bany);

}
this.handlerMenuBany  = function ()
{
    Pantalla.lightMenuItem(1);
    Pantalla.updateBackground(1) ;
    Pantalla.createSubMenuBany();
    Audio.sonaENTORN();
    //stage.update();
}
this.createSubMenuBany  = function ()
{
    Pantalla.eliminaObjectes();
    Pantalla.createSabo();
    Pantalla.createEsponja();
    Pantalla.createDutxa();
}
this.createDutxa  = function  ()
{
    if( dutxa == null || dutxa == undefined )
    {
        dutxa = new createjs.Bitmap(imatges['dutxa']);
        dutxa.x = 620/RESOLUTION;
        dutxa.y = 1210/RESOLUTION;
        dutxa.cache(0, 0, 289/RESOLUTION, 179/RESOLUTION);
    }

    dutxa.addEventListener('click',  this.handlerDutxa);
    dutxa.addEventListener('mousedown',  Pantalla.handlerDragItem);
    stage.addChild(dutxa);
}
this.handlerDutxa  = function ()
{
    if(Biribiri.animacioPlaying())
    {
        dutxa.removeEventListener('tick', Pantalla.handlerDragMove);
        dutxa.x = 620/RESOLUTION;
        dutxa.y = 1210/RESOLUTION;

        Pantalla.incrementalTWO();
        Biribiri.amagaBiriBase();
        dutxar.visible= true;
        dutxar.gotoAndPlay("move");
        Pantalla.improveSmiley('DUTXA');
        Audio.sonaDUTXA();
        pixat.alpha -= 0.2;
    }
}
this.createEsponja  = function  ()
{
    if( esponja == null || esponja == undefined )
    {
        esponja = new createjs.Bitmap(imatges['esponja']);
        esponja.x = 400/RESOLUTION;
        esponja.y = 1220/RESOLUTION;
        esponja.cache(0, 0, 182/RESOLUTION, 160/RESOLUTION);
    }

    esponja.addEventListener('click',  this.handlerEsponja);
    esponja.addEventListener('mousedown',  Pantalla.handlerDragItem);
    stage.addChild(esponja);
}
this.handlerEsponja  = function ()
{
    if(Biribiri.animacioPlaying())
    {
        esponja.removeEventListener('tick', Pantalla.handlerDragMove);
        esponja.x = 400/RESOLUTION;
        esponja.y = 1220/RESOLUTION;

        Pantalla.incrementalTWO();
        Biribiri.amagaBiriBase();
        esponjar.visible= true;
        esponjar.gotoAndPlay("move");
        Pantalla.improveSmiley('DUTXA');
        Audio.sonaOBJ();

        pixat.alpha -= 0.2;
    }
}


this.createSabo  = function  ()
{
    if( sabo == null || sabo == undefined )
    {
        sabo = new createjs.Bitmap(imatges['sabo']);
        sabo.x = 130/RESOLUTION;
        sabo.y = 1190/RESOLUTION;
        sabo.cache(0, 0, 222/RESOLUTION, 243/RESOLUTION);
    }

    sabo.addEventListener('click',  this.handlerSabo);
    sabo.addEventListener('mousedown',  Pantalla.handlerDragItem);
    stage.addChild(sabo);
}
this.handlerSabo  = function ()
{
    if(Biribiri.animacioPlaying())
    {
        sabo.removeEventListener('tick', Pantalla.handlerDragMove);
        sabo.x = 130/RESOLUTION;
        sabo.y = 1190/RESOLUTION;

        Pantalla.incrementalTWO();
        Biribiri.amagaBiriBase();
        sabonar.visible= true;
        sabonar.gotoAndPlay("move");
        Pantalla.improveSmiley('DUTXA');
        Audio.sonaOBJ();

        pixat.alpha -= 0.2;
    }
}

this.createBarres  = function ()
{
    Pantalla.createBarraInferior();
    Pantalla.createBarraDreta();
    Pantalla.createBarraEsquerra();
    Pantalla.createIcones();
    Pantalla.createTexts();

}
this.createTexts  = function createTexts()
{
    Pantalla.createNumCopa();
    Pantalla.createNumMedalla();
    Pantalla.createNumPunts();

}
this.createNumCopa  = function  ()
{
    llunesArray[0] = new createjs.Bitmap( imatges[ '0' ] );
    llunesArray[0].y = 965/RESOLUTION;
    llunesArray[0].x = 60/RESOLUTION;

    stage.addChild(llunesArray[0]);

}
this.createNumMedalla  = function  ()
{
    estrellesArray[0] = new createjs.Bitmap( imatges[ '0' ] );
    estrellesArray[0].y = 750/RESOLUTION;
    estrellesArray[0].x = 60/RESOLUTION;

    stage.addChild(estrellesArray[0]);
}
this.createNumPunts  = function  ()
{
    puntsArray[0] = new createjs.Bitmap(imatges['0']);
      /*  numPunts = new createjs.Text("0", "bold "+(fontSize/RESOLUTION)+"px Arial", "#111111");
        numPunts.textBaseline = "alphabetic";  */

    puntsArray[0].y = 400/RESOLUTION;
    puntsArray[0].x = 60/RESOLUTION;

    stage.addChild( puntsArray[0]);
}
this.sumaPunts = function( punts)
{
    var puntsNous;
    puntsNous = new createjs.Bitmap( imatges[ '' + punts ] );
    puntsNous.y = 1440/(RESOLUTION*2);
    puntsNous.x = 900/(RESOLUTION*2);

    stage.addChild(puntsNous);
    createjs.Tween.get(puntsNous).to({x:60/RESOLUTION, y:405/RESOLUTION, scaleX:0.5, scaleY: 0.5}, 400).call(function(){stage.removeChild(puntsNous);});

}
this.createAvis = function(newX, newY)
{
    sPunt = puntuacio.toString();
    newX +=25;
    console.log("Punts: "+sPunt);

    puntsAuxArray = new Array();

    for( var i =0; i < sPunt.length; i++)
    {
        puntsAuxArray[i] = new createjs.Bitmap( imatges[ '' + sPunt[ sPunt.length - (i+1) ] ] );
        puntsAuxArray[i].y = 405/RESOLUTION;

        if(sPunt.length == 1) puntsAuxArray[i].x = 60/RESOLUTION;
        else  puntsAuxArray[i].x = 5 + (sPunt.length-i-1) * 55/RESOLUTION;

        stage.addChild(puntsAuxArray[i]);

        createjs.Tween.get(puntsAuxArray[i]).to({x:newX - i*25/RESOLUTION, y:newY, scaleX:0.4, scaleY: 0.4}, 600).call(function(i){stage.removeChild(puntsAuxArray[i]);},[i]);
    }

}
this.updateNumPunts = function()
{
    sPunt = puntuacio.toString();
    console.log("Punts: "+sPunt);

    for( var i =0; i < puntsArray.length; i++)
    {
        stage.removeChild(puntsArray[i]);
    }
    puntsArray = new Array();

    for( var i =0; i < sPunt.length; i++)
    {
        puntsArray[i] = new createjs.Bitmap( imatges[ '' + sPunt[ sPunt.length - (i+1) ] ] );
        puntsArray[i].y = 405/RESOLUTION;

        if(sPunt.length == 1) puntsArray[i].x = 60/RESOLUTION;
        else  puntsArray[i].x = 5 + (sPunt.length-i-1) * 55/RESOLUTION;

        stage.addChild(puntsArray[i]);
    }

}
    this.updateNumMedalles = function(num)
    {
        sPunt = num.toString();

        for( var i =0; i < estrellesArray.length; i++)
        {
            stage.removeChild(estrellesArray[i]);
        }
        estrellesArray = new Array();

        for( var i =0; i < sPunt.length; i++)
        {
            estrellesArray[i] = new createjs.Bitmap( imatges[ '' + sPunt[ sPunt.length - (i+1) ] ] );
            estrellesArray[i].y = 750/RESOLUTION;

            if(sPunt.length == 1) estrellesArray[i].x = 60/RESOLUTION;
            else  estrellesArray[i].x = 5 + (sPunt.length-i-1) * 55/RESOLUTION;

            stage.addChild(estrellesArray[i]);
        }

    }
    this.updateNumCopes = function(num)
    {
        sPunt = num.toString();

        for( var i =0; i < llunesArray.length; i++)
        {
            stage.removeChild(llunesArray[i]);
        }
        llunesArray = new Array();

        for( var i =0; i < sPunt.length; i++)
        {
            llunesArray[i] = new createjs.Bitmap( imatges[ '' + sPunt[ sPunt.length - (i+1) ] ] );
            llunesArray[i].y = 965/RESOLUTION;

            if(sPunt.length == 1) llunesArray[i].x = 60/RESOLUTION;
            else  llunesArray[i].x = 5 + (sPunt.length-i-1) * 55/RESOLUTION;

            stage.addChild(llunesArray[i]);
        }

    }
this.createIcones  = function ()
{
    Pantalla.createInfo();
    Pantalla.createJoystick();
    Pantalla.createCopa();
    Pantalla.createMedalla();
    Pantalla.createPunts();
    Pantalla.createSave();
    Pantalla.createEnrera();
}
this.createEnrera = function ()
{
    if( enrera == null || enrera == undefined )
    {
        enrera = new createjs.Bitmap(imatges['boto_enrera']);
        enrera.y = 632/RESOLUTION;
        enrera.x = 855/RESOLUTION;
        enrera.cache(0, 0, 110/RESOLUTION, 116/RESOLUTION);
    }
    stage.addChild(enrera);
    enrera.addEventListener('mousedown',  Pantalla.handlerEnrera);
}
this.handlerEnrera = function()
{
    if( Biribiri.animacioPlaying() && Model.are_cookies_enabled() )
    {
        Model.saveLocalGame();
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", Main.handlerTick);
        stage.removeEventListener('stagemousedown', Main.handlerTick) ;

        if( cookiesi == null || cookiesi == undefined )
        {
            cookiesi = new createjs.Bitmap( imatges['cookie_si']);
            cookiesi.y = 0;
            cookiesi.x = 0;
            cookiesi.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(cookiesi);

        if( accepta_cookie == null || accepta_cookie == undefined )
        {
            accepta_cookie = new createjs.Bitmap( imatges['accepta_cookie']);
            accepta_cookie.y = 0/RESOLUTION;
            accepta_cookie.x = 0/RESOLUTION;
            accepta_cookie.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(accepta_cookie);
        accepta_cookie.addEventListener('mousedown',  Pantalla.handlerCookieOK);

        if( torna_cookie == null || torna_cookie == undefined )
        {
            torna_cookie = new createjs.Bitmap( imatges['torna_cookie']);
            torna_cookie.y = 0/RESOLUTION;
            torna_cookie.x = 0/RESOLUTION;
            torna_cookie.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(torna_cookie);
        torna_cookie.addEventListener('mousedown',  Pantalla.handlerCookieTancar);
        stage.update();
        $("#background").css('background-color','#FFB800');
    }
    if( Biribiri.animacioPlaying() && !Model.are_cookies_enabled() )
    {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", Main.handlerTick);
        stage.removeEventListener('stagemousedown', Main.handlerTick);

        if( cookieno == null || cookieno == undefined )
        {
            cookieno = new createjs.Bitmap( imatges['cookie_no']);
            cookieno.y = 0;
            cookieno.x = 0;
            cookieno.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(cookieno);

        if( accepta_cookie == null || accepta_cookie == undefined )
        {
            accepta_cookie = new createjs.Bitmap( imatges['accepta_cookie']);
            accepta_cookie.y = 0/RESOLUTION;
            accepta_cookie.x = 0/RESOLUTION;
            accepta_cookie.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(accepta_cookie);
        accepta_cookie.addEventListener('mousedown',  Pantalla.handlerCookieOK);

        if( torna_cookie == null || torna_cookie == undefined )
        {
            torna_cookie = new createjs.Bitmap( imatges['torna_cookie']);
            torna_cookie.y = 0/RESOLUTION;
            torna_cookie.x = 0/RESOLUTION;
            torna_cookie.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(torna_cookie);
        torna_cookie.addEventListener('mousedown',  Pantalla.handlerCookieTancar);
        stage.update();
        $("#background").css('background-color','#FFB800');
    }
}
this.handlerCookieOK = function()
{
    stage.removeAllChildren();
    Menu.startMenu();
    stage.update();
}
this.handlerCookieTancar = function()
{
    stage.removeAllChildren();
    Main.InitGame();
    stage.update();
}
this.createSave = function ()
{
    if( guardar == null || guardar == undefined )
    {
        guardar = new createjs.Bitmap(imatges['boto_save']);
        guardar.y = 515/RESOLUTION;
        guardar.x = 855/RESOLUTION;
        guardar.cache(0, 0, 108/RESOLUTION, 112/RESOLUTION);
    }
    stage.addChild(guardar);
    guardar.addEventListener('mousedown',  Pantalla.handlerGuardar);
}
this.handlerGuardar = function()
{
    if(Biribiri.animacioPlaying())
    {
        alert("desa");
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", Main.handlerTick);
        stage.removeEventListener('stagemousedown', Main.handlerTick) ;

        if( desar == null || desar == undefined )
        {
            desar = new createjs.Bitmap( imatges['base_desa']);
            desar.y = 0;
            desar.x = 0;
            desar.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(desar);

        if( btdesartanca == null || btdesartanca == undefined )
        {
            btdesartanca = new createjs.Bitmap( imatges['tancar_desa']);
            btdesartanca.y = 0/RESOLUTION;
            btdesartanca.x = 0/RESOLUTION;
            btdesartanca.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(btdesartanca);
        btdesartanca.addEventListener('mousedown',  Pantalla.handlerDesarTanca);

        if( btdesar == null || btdesar == undefined )
        {
            btdesar = new createjs.Bitmap( imatges['bt_desa']);
            btdesar.y = 0/RESOLUTION;
            btdesar.x = 0/RESOLUTION;
            btdesar.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(btdesar);
        btdesar.addEventListener('mousedown',  Pantalla.handlerDesarOK);
        stage.update();
        $("#background").css('background-color','#FFB800');
    }
}
this.handlerDesarTanca = function()
{
    stage.removeAllChildren();
    Main.InitGame();
    stage.update();
}

this.handlerDesarOK = function()
{
    alert("desar ok");
    guadar_en_joc = true;
    var popup = $('.hidden .popup-registrat').clone();
    $('.canvasHolder .popup').remove();
    $('.canvasHolder .innerWrapper').append(popup);
    $('.canvasHolder .popup-registrat').fadeIn(200);

    /*Model.saveGame();

    stage.removeAllChildren();
    Main.InitGame();
    stage.update(); */
}

this.createPunts  = function  ()
{
    if( punts == null || punts == undefined )
    {
        punts = new createjs.Bitmap(imatges['punts']);
        punts.y = 485/RESOLUTION;
        punts.x = 15/RESOLUTION;
        punts.cache(0, 0, 107/RESOLUTION, 41/RESOLUTION);
    }
    stage.addChild(punts);
}
this.createMedalla  = function ()
{
    if( medalla == null || medalla == undefined )
    {
        medalla = new createjs.Bitmap(imatges['medalla']);
        medalla.y = 635/RESOLUTION;
        medalla.x = 15/RESOLUTION;
        medalla.cache(0, 0, 98/RESOLUTION, 125/RESOLUTION);
    }
    stage.addChild(medalla);
    medalla.addEventListener('mousedown',  Pantalla.handlerFinal);
}
this.createCopa  = function  ()
{
    if( copa == null || copa == undefined )
    {
        copa = new createjs.Bitmap(imatges['copa']);
        copa.y = 820/RESOLUTION;
        copa.x = 5/RESOLUTION;
        copa.cache(0, 0, 121/RESOLUTION, 147/RESOLUTION);
    }
    stage.addChild(copa);
    copa.addEventListener('mousedown',  Pantalla.handlerFinal);
}
this.handlerFinal = function()
{
    if(Biribiri.animacioPlaying())
    {
         Final.initMenu();
        $("#background").css('background-color','#FFB800');
    }
}
this.createInfo  = function  ()
{
    if( info == null || info == undefined )
    {
        info = new createjs.Bitmap(imatges['info']);
        info.y = 394/RESOLUTION;
        info.x = 863/RESOLUTION;
        info.cache(0, 0, 89/RESOLUTION, 90/RESOLUTION);
    }
    stage.addChild(info);
    info.addEventListener('mousedown',  Pantalla.handlerOpcions);
}
this.handlerOpcions = function ()
{
    if(Biribiri.animacioPlaying())
    {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", Main.handlerTick);
        stage.removeEventListener('stagemousedown', Main.handlerTick) ;

        InfoGame.emoticJoc = smileyJOC ;
        InfoGame.emoticCuina = smileyMENJA;
        InfoGame.emoticBany = smileyDUTXA;
        InfoGame.emoticDorm = smileyDORM;

        if( opcions == null || opcions == undefined )
        {
            opcions = new createjs.Bitmap( imatges['ajuda']);
            opcions.y = 0;
            opcions.x = 0;
            opcions.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(opcions);

        if( btAjudaOK == null || btAjudaOK == undefined )
        {
            btAjudaOK = new createjs.Bitmap( imatges['tancar_ajuda']);
            btAjudaOK.y = 12/RESOLUTION;
            btAjudaOK.x = 827/RESOLUTION;
            btAjudaOK.cache(0, 0, 122/RESOLUTION, 120/RESOLUTION);
        }
        stage.addChild(btAjudaOK);
        btAjudaOK.addEventListener('mousedown',  Pantalla.handlerOK);
        stage.update();
        $("#background").css('background-color','#FFB800');
    }
}
this.handlerOK = function()
{
    stage.removeAllChildren();
    Main.InitGame();
    stage.update();
}
this.createJoystick  = function  ()
{
    if( joystick == null || joystick == undefined )
    {
        joystick = new createjs.Bitmap(imatges['joystick']);
        joystick.y = 870/RESOLUTION;
        joystick.x = 835/RESOLUTION;
        joystick.cache(0, 0, 117/RESOLUTION, 99/RESOLUTION);
    }

    joystick.addEventListener('mousedown',  this.handlerJoystick);
    stage.addChild(joystick);
}
this.handlerJoystick = function()
{
    //Disfressa.initMenu();
    if(Biribiri.animacioPlaying())
    {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", Main.handlerTick);
        stage.removeEventListener('stagemousedown', Main.handlerTick) ;

        InfoGame.emoticJoc = smileyJOC ;
        InfoGame.emoticCuina = smileyMENJA;
        InfoGame.emoticBany = smileyDUTXA;
        InfoGame.emoticDorm = smileyDORM;

        if( jocs == null || jocs == undefined )
        {
            jocs = new createjs.Bitmap( imatges['base_jocs']);
            jocs.y = 0;
            jocs.x = 0;
            jocs.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(jocs);

        Pantalla.addJocs();

        if( btOK == null || btOK == undefined )
        {
            btOK = new createjs.Bitmap( imatges['jocs_tornar']);
            btOK.y = 0/RESOLUTION;
            btOK.x = 0/RESOLUTION;
            btOK.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(btOK);
        btOK.addEventListener('mousedown',  Pantalla.handlerJocsOK);
        stage.update();
        $("#background").css('background-color','#FFB800');
    }
}
this.handlerJocsOK = function()
{
    stage.removeAllChildren();
    Main.InitGame();
    stage.update();
}

this.addJocs = function()
{
    if(nivellMinijoc==0)
    {
        avis =  new createjs.Bitmap( imatges['text_no_jocs']);
        avis.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        avis.y = 0 / RESOLUTION;
        avis.x = 0 / RESOLUTION;
        stage.addChild(avis);

    }
    if(nivellMinijoc>=1)
    {
        joc_1 = new createjs.Bitmap( imatges['ico_disfressa']);
        joc_1.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        joc_1.x = 150/RESOLUTION;
        joc_1.y = 350/RESOLUTION;
        joc_1.addEventListener("click", Pantalla.triaJoc);
        stage.addChild(joc_1);
    }

    if(nivellMinijoc>=2)
    {
        joc_2 = new createjs.Bitmap( imatges['ico_xilofon']);
        joc_2.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        joc_2.x = 450/RESOLUTION;
        joc_2.y = 350/RESOLUTION;
        joc_2.addEventListener("click", Pantalla.triaJoc);
        stage.addChild(joc_2);
    }

    if(nivellMinijoc>=3)
    {
        joc_3 = new createjs.Bitmap( imatges['ico_busca']);
        joc_3.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        joc_3.x = 150/RESOLUTION;
        joc_3.y = 680/RESOLUTION;
        joc_3.addEventListener("click", Pantalla.triaJoc);
        stage.addChild(joc_3);
    }
    if(nivellMinijoc>=4)
    {
        joc_4 = new createjs.Bitmap( imatges['ico_unir']);
        joc_4.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        joc_4.x = 450/RESOLUTION;
        joc_4.y = 680/RESOLUTION;
        joc_4.addEventListener("click", Pantalla.triaJoc);
        stage.addChild(joc_4);
    }

}
this.triaJoc  = function (event)
{
     if(event.target == joc_1)  Disfressa.initMenu();
     else if(event.target == joc_2)  Xilofon.initMenu();
     else if(event.target == joc_3)  Busca.initMenu();
     else if(event.target == joc_4)  Punts.initMenu();

    stage.update();
}
this.createBarraDreta  = function ()
{
    if( barra_dreta == null || barra_dreta == undefined )
    {
        barra_dreta = new createjs.Bitmap(imatges['barra_dreta']);
        barra_dreta.y = 215/RESOLUTION;
        barra_dreta.x = 675/RESOLUTION;
        barra_dreta.cache(0, 0, 286/RESOLUTION, 988/RESOLUTION);
    }
    stage.addChild(barra_dreta);
}
this.createBarraEsquerra  = function ()
{
    if( barra_esquerra == null || barra_esquerra == undefined )
    {
        barra_esquerra = new createjs.Bitmap(imatges['barra_esquerra']);
        barra_esquerra.y = 0/RESOLUTION;
        barra_esquerra.cache(0, 0, 288/RESOLUTION, 1440/RESOLUTION);
    }
    stage.addChild(barra_esquerra);

}
this.createBarraInferior  = function ()
{
    if( barra_inferior == null || barra_inferior == undefined )
    {
        barra_inferior = new createjs.Bitmap(imatges['barra_inferior']);
        barra_inferior.y = 1110/RESOLUTION;
        barra_inferior.cache(0, 0, 960/RESOLUTION, 330/RESOLUTION);
    }
    stage.addChild(barra_inferior);

}
/*this.  = function createBackground(option)
{
    switch(option)
    {
        case 1:   background = new createjs.Bitmap(imatges['bany']);
            break;
        case 2:   background = new createjs.Bitmap(imatges['cuina']);
            break;
        case 3:   background = new createjs.Bitmap(imatges['dorm']);
            break;
        case 4:   background = new createjs.Bitmap(imatges['menjador']);
            break;
    }
    background.cache(0, 0, 960, 1440);
    background.snapToPixel = true;
    stage.removeChildAt(0)  ;
    stage.addChildAt(background,0);

} */
this.createBackground  = function ()
{

    background1 = new createjs.Bitmap(imatges['bany']);
    background2 = new createjs.Bitmap(imatges['cuina']);
    background3 = new createjs.Bitmap(imatges['dorm']);
    background4 = new createjs.Bitmap(imatges['menjador']);

    background1.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
    background2.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
    background3.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
    background4.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);


    stage.removeChildAt(0)  ;
    switch(lastEscena)
    {
        case 1: stage.addChildAt(background1,0);
            currentBackground = background4;
            $("#background").css('background-color','#36b50b');
            break;
        case 2: stage.addChildAt(background2,0);
            currentBackground = background2;
            $("#background").css('background-color','#e32929');
            break;
        case 3: stage.addChildAt(background3,0);
            currentBackground = background3;
            $("#background").css('background-color','#26b4dd');
            break;
        case 4: stage.addChildAt(background4,0);
            currentBackground = background4;
            $("#background").css('background-color','#eec400');
            break;
    }



}
this.lightMenuItem = function(option)
{

    // DUTXA
    stage.removeChild(menu_bany);

    if(bany_active)
        menu_bany = new createjs.Bitmap(imatges['menu_bany']);
    else
        menu_bany = new createjs.Bitmap(imatges['bany_off']);
    menu_bany.alpha = 0.7;
    menu_bany.x = 469/RESOLUTION;
    menu_bany.y = 0/RESOLUTION;
    menu_bany.cache(0, 0,257/RESOLUTION, 185/RESOLUTION);
    stage.addChild(menu_bany);

    stage.removeChild(anim_bany);

    if(bany_active)
        anim_bany = new createjs.Bitmap(imatges['cara'+smileyDUTXA]);
    else
        anim_bany = new createjs.Bitmap(imatges['cara_off']);

    anim_bany.x = 502/RESOLUTION;
    anim_bany.y = -15/RESOLUTION;
    anim_bany.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
    anim_bany.alpha = 0.7;
    stage.addChild(anim_bany);

    if(bany_active)
    {
        anim_bany.addEventListener('mousedown', this.handlerMenuBany);
         menu_bany.addEventListener('mousedown',  this.handlerMenuBany);
    }

    // MENJA
    stage.removeChild(menu_menja);

    if(menja_active)
        menu_menja = new createjs.Bitmap(imatges['menu_menja']);
    else
        menu_menja = new createjs.Bitmap(imatges['menjar_off']);
    menu_menja.alpha = 0.7;
    menu_menja.x = 232/RESOLUTION;
    menu_menja.y = 0/RESOLUTION;
    menu_menja.cache(0, 0,257/RESOLUTION, 185/RESOLUTION);
    stage.addChild(menu_menja);

    stage.removeChild(anim_menja);

    if(menja_active)
        anim_menja = new createjs.Bitmap(imatges['cara'+smileyMENJA]);
    else
        anim_menja = new createjs.Bitmap(imatges['cara_off']);

    anim_menja.x = 265/RESOLUTION;
    anim_menja.y = -15/RESOLUTION;
    anim_menja.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
    anim_menja.alpha = 0.7;
    stage.addChild(anim_menja);

    if(menja_active)
    {
        anim_menja.addEventListener('mousedown', this.handlerMenuMenja);
        menu_menja.addEventListener('mousedown',  this.handlerMenuMenja);
    }

    // DORM
    stage.removeChild(menu_dorm);

    if(dorm_active)
        menu_dorm = new createjs.Bitmap(imatges['menu_dorm']);
    else
        menu_dorm = new createjs.Bitmap(imatges['dorm_off']);
    menu_dorm.alpha = 0.7;
    menu_dorm.x = 711/RESOLUTION;
    menu_dorm.y = 0/RESOLUTION;
    menu_dorm.cache(0, 0,257/RESOLUTION, 185/RESOLUTION);
    stage.addChild(menu_dorm);

    stage.removeChild(anim_dorm);

    if(dorm_active)
        anim_dorm = new createjs.Bitmap(imatges['cara'+smileyDORM]);
    else
        anim_dorm = new createjs.Bitmap(imatges['cara_off']);

    anim_dorm.x = 744/RESOLUTION;
    anim_dorm.y = -15/RESOLUTION;
    anim_dorm.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
    anim_dorm.alpha = 0.7;
    stage.addChild(anim_dorm);

    if(dorm_active)
    {
        anim_dorm.addEventListener('mousedown', this.handlerMenuDorm);
        menu_dorm.addEventListener('mousedown',  this.handlerMenuDorm);
    }

    //JOC
    stage.removeChild(menu_joc);
    menu_joc = new createjs.Bitmap(imatges['menu_joc']);
    menu_joc.x = -10/RESOLUTION;
    menu_joc.y = 0/RESOLUTION;
    menu_joc.cache(0,0,257/RESOLUTION, 185/RESOLUTION);
    menu_joc.addEventListener('mousedown',  this.handlerMenuJoc);
    menu_joc.alpha = 0.7;
    stage.removeChild(anim_joc);

    anim_joc = new createjs.Bitmap(imatges['cara'+smileyJOC]);
    anim_joc.x = 23/RESOLUTION;
    anim_joc.y = -15/RESOLUTION;
    anim_joc.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
    anim_joc.alpha = 0.7;
    anim_joc.addEventListener('mousedown',  this.handlerMenuJoc);

    stage.addChild(menu_joc);
    stage.addChild(anim_joc);


    switch(option)
    {
        case 1:
            stage.removeChild(menu_bany);
            menu_bany = new createjs.Bitmap(imatges['bany_on']);
            menu_bany.x = 410/RESOLUTION;
            menu_bany.y = 0/RESOLUTION;
            menu_bany.cache(0, 0,380/RESOLUTION, 231/RESOLUTION);
            stage.addChild(menu_bany);
            menu_bany.alpha= 1;
            stage.setChildIndex(menu_bany, stage.getNumChildren() - 1);

            stage.removeChild(anim_bany);
            anim_bany = new createjs.Bitmap(imatges['cara'+smileyDUTXA]);
            anim_bany.x = 502/RESOLUTION;
            anim_bany.y = -15/RESOLUTION;
            anim_bany.alpha= 1;
            anim_bany.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
            stage.addChild(anim_bany);
            currentEscena ="DUTXA";
            break;
        case 2:
            stage.removeChild(menu_menja);
            menu_menja = new createjs.Bitmap(imatges['menjar_on']);
            menu_menja.x = 175/RESOLUTION;
            menu_menja.y = 0/RESOLUTION;
            menu_menja.cache(0, 0,380/RESOLUTION, 232/RESOLUTION);
            menu_menja.alpha= 1;
            stage.addChild(menu_menja);
            stage.setChildIndex(menu_menja, stage.getNumChildren() - 1);

            stage.removeChild(anim_menja);
            anim_menja = new createjs.Bitmap(imatges['cara'+smileyMENJA]);
            anim_menja.x = 265/RESOLUTION;
            anim_menja.y = -15/RESOLUTION;
            anim_menja.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
            anim_menja.alpha= 1;
            stage.addChild(anim_menja);
            currentEscena ="MENJA";
            break;
        case 3:
            stage.removeChild(menu_dorm);
            menu_dorm = new createjs.Bitmap(imatges['dorm_on']);
            menu_dorm.x = 670/RESOLUTION;
            menu_dorm.y = 0/RESOLUTION;
            menu_dorm.cache(0, 0,293/RESOLUTION, 213/RESOLUTION);
            menu_dorm.alpha= 1;
            stage.addChild(menu_dorm);
            stage.setChildIndex(menu_dorm, stage.getNumChildren() - 1);

            stage.removeChild(anim_dorm);
            anim_dorm = new createjs.Bitmap(imatges['cara'+smileyDORM]);
            anim_dorm.x = 744/RESOLUTION;
            anim_dorm.y = -15/RESOLUTION;
            anim_dorm.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
            anim_dorm.alpha= 1;
            stage.addChild(anim_dorm);
            currentEscena ="DORM";
            break;
        case 4:
            stage.removeChild(menu_joc);
            menu_joc = new createjs.Bitmap(imatges['jugar_on']);
            menu_joc.x = 0/RESOLUTION;
            menu_joc.y = 0/RESOLUTION;
            menu_joc.cache(0,0,257/RESOLUTION, 185/RESOLUTION);
            menu_joc.alpha= 1;
            stage.addChild(menu_joc);

            stage.setChildIndex(menu_joc, stage.getNumChildren() - 1);

            stage.removeChild(anim_joc);
            anim_joc = new createjs.Bitmap(imatges['cara'+smileyJOC]);
            anim_joc.x = 23/RESOLUTION;
            anim_joc.y = -15/RESOLUTION;
            anim_joc.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
            anim_joc.alpha= 1;
            stage.addChild(anim_joc);
            currentEscena ="JOC";
            break;
    }
}
this.updateBackground  = function (option)
{
    switch(option)
    {
        case 1:
            stage.removeChildAt(0);
            stage.addChildAt(background1,0);
            currentBackground = background1;
            currentEscena = "DUTXA";
            lastEscena = 1;
            $("#background").css('background-color','#36b50b');
           // bandeja.visible= false;
            break;
        case 2:
            stage.removeChildAt(0);
            stage.addChildAt(background2,0);
            currentBackground = background2;
            currentEscena = "MENJA";
            lastEscena = 2;
            $("#background").css('background-color','#e32929');
            //bandeja.visible= true;
            break;
        case 3:
            stage.removeChildAt(0);
            stage.addChildAt(background3,0);
            currentBackground = background3;
            currentEscena = "DORM";
            lastEscena = 3;
            $("#background").css('background-color','#26b4dd');
            //bandeja.visible= false;
            break;
        case 4:
            stage.removeChildAt(0);
            stage.addChildAt(background4,0);
            currentBackground = background4;
            currentEscena = "JOC";
            lastEscena = 4;
            $("#background").css('background-color','#eec400');
           // bandeja.visible= false;
            break;
    }
}

this.incrementalTWO  = function ()
{
    //var punts = parseInt(numPunts.text);
    //puntuacio+=2;

    this.sumaPunts(2);
    setTimeout(function(){puntuacio+=2;Pantalla.updateNumPunts();},400);
   // numPunts.text = punts;
}
this.improveSmiley  = function (tipus)
{
   switch(tipus)
   {
       case 'JOC':
           if( smileyJOC > 1)
           {
               smileyJOC--;
               stage.removeChild(anim_joc);
               anim_joc = new createjs.Bitmap(imatges['cara'+smileyJOC]);
               anim_joc.x = 23/RESOLUTION;
               anim_joc.y = -15/RESOLUTION;
               anim_joc.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);

               stage.addChild(anim_joc);
           }
           break;
       case 'MENJA':
           if( smileyMENJA > 1)
           {
               smileyMENJA--;
               stage.removeChild(anim_menja);
               anim_menja = new createjs.Bitmap(imatges['cara'+smileyMENJA]);
               anim_menja.x = 265/RESOLUTION;
               anim_menja.y = -15/RESOLUTION;
               anim_menja.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);

               stage.addChild(anim_menja);
           }
           break;
       case 'DUTXA':
           if( smileyDUTXA > 1)
           {
               smileyDUTXA--;
               stage.removeChild(anim_bany);
               anim_bany = new createjs.Bitmap(imatges['cara'+smileyDUTXA]);
               anim_bany.x = 502/RESOLUTION;
               anim_bany.y = -15/RESOLUTION;
               anim_bany.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);

               stage.addChild(anim_bany);
           }
           break;
       case 'DORM':
           if( smileyDORM > 1)
           {
               smileyDORM--;
               stage.removeChild(anim_dorm);
               anim_dorm = new createjs.Bitmap(imatges['cara'+smileyDORM]);
               anim_dorm.x = 744/RESOLUTION;
               anim_dorm.y = -15/RESOLUTION;
               anim_dorm.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);

               stage.addChild(anim_dorm);
           }
           break;
   }
}

this.degenerateSmiley  = function (tipus)
{
    if( smileyJOC < 5 )
    {
        smileyJOC++;
        stage.removeChild(anim_joc);
        anim_joc = new createjs.Bitmap(imatges['cara'+smileyJOC]);
        anim_joc.x =  23/RESOLUTION;
        anim_joc.y = -15/RESOLUTION;
        anim_joc.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
        stage.addChild(anim_joc);
        if( currentEscena !="JOC")
            anim_joc.alpha =0.7;
    }

    if( smileyMENJA < 5 )
    {
        smileyMENJA++;
        stage.removeChild(anim_menja);
        anim_menja = new createjs.Bitmap(imatges['cara'+smileyMENJA]);
        anim_menja.x = 265/RESOLUTION;
        anim_menja.y = -15/RESOLUTION;
        anim_menja.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
        stage.addChild(anim_menja);
        if( currentEscena !="MENJA")
            anim_menja.alpha =0.7;
    }
   /* else
    {
        if(currentEscena != "MENJA")
        {
            punts_menja = puntuacio+10;
            stage.removeChild(menu_menja);
            menu_menja = new createjs.Bitmap(imatges['menjar_off']);
            menu_menja.x = 232/RESOLUTION;
            menu_menja.cache(0, 0,257/RESOLUTION, 185/RESOLUTION);
            menu_menja.alpha=0.7;
            stage.addChild(menu_menja);

            stage.removeChild(anim_menja);
            anim_menja = new createjs.Bitmap(imatges['cara_off']);
            anim_menja.x = 265/RESOLUTION;
            anim_menja.y = -15/RESOLUTION;
            anim_menja.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
            anim_menja.alpha=0.7;
            stage.addChild(anim_menja);

            menja_active = false;
        }

    } */

    if( smileyDUTXA < 5 )
    {
        smileyDUTXA++;
        stage.removeChild(anim_bany);
        anim_bany = new createjs.Bitmap(imatges['cara'+smileyDUTXA]);
        anim_bany.x = 502/RESOLUTION;
        anim_bany.y = -15/RESOLUTION;
        anim_bany.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
        stage.addChild(anim_bany);
        if( currentEscena !="DUTXA")
            anim_bany.alpha =0.7;
    }
   /* else
    {
        if(currentEscena != "DUTXA")
        {
            punts_bany = puntuacio+10;
            stage.removeChild(menu_bany);
            menu_bany = new createjs.Bitmap(imatges['bany_off']);
            menu_bany.x = 469/RESOLUTION;
            menu_bany.cache(0, 0,257/RESOLUTION, 185/RESOLUTION);
            menu_bany.alpha=0.7;
            stage.addChild(menu_bany);

            stage.removeChild(anim_bany);
            anim_bany = new createjs.Bitmap(imatges['cara_off']);
            anim_bany.x = 502/RESOLUTION;
            anim_bany.y = -15/RESOLUTION;
            anim_bany.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
            anim_bany.alpha=0.7;
            stage.addChild(anim_bany);
            bany_active= false;
        }

    }   */

    if( smileyDORM < 5 )
    {
        smileyDORM++;
        stage.removeChild(anim_dorm);
        anim_dorm = new createjs.Bitmap(imatges['cara'+smileyDORM]);
        anim_dorm.x = 744/RESOLUTION;
        anim_dorm.y = -15/RESOLUTION;
        anim_dorm.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
        stage.addChild(anim_dorm);
        if( currentEscena !="DORM")
            anim_dorm.alpha =0.7;
    }
   /* else
    {
        //console.log(currentEscena);
        if(currentEscena != "DORM")
        {
            punts_dorm = puntuacio+10;
            stage.removeChild(menu_dorm);
            menu_dorm = new createjs.Bitmap(imatges['dorm_off']);
            menu_dorm.x = 711/RESOLUTION;
            menu_dorm.cache(0, 0,257/RESOLUTION, 185/RESOLUTION);
            menu_dorm.alpha=0.7;
            stage.addChild(menu_dorm);

            stage.removeChild(anim_dorm);
            anim_dorm = new createjs.Bitmap(imatges['cara_off']);
            anim_dorm.x = 744/RESOLUTION;
            anim_dorm.y = -15/RESOLUTION;
            anim_dorm.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
            anim_dorm.alpha=0.7;
            stage.addChild(anim_dorm);
            dorm_active =false;
        } */

}
    this.updateSmiley  = function ()
    {

        stage.removeChild(anim_joc);
        anim_joc = new createjs.Bitmap(imatges['cara'+smileyJOC]);
        anim_joc.x =  23/RESOLUTION;
        anim_joc.y = -15/RESOLUTION;
        anim_joc.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
        stage.addChild(anim_joc);

       // console.log("punts: "+puntuacio+" menja: "+punts_menja +10);
        if(puntuacio >= punts_menja  )
        {
            stage.removeChild(anim_menja);
            anim_menja = new createjs.Bitmap(imatges['cara'+smileyMENJA]);
            anim_menja.x = 265/RESOLUTION;
            anim_menja.y = -15/RESOLUTION;
            anim_menja.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
            anim_menja.alpha=0.7;
            stage.addChild(anim_menja);
        }

        if(puntuacio >= punts_bany  )
        {
            stage.removeChild(anim_bany);
            anim_bany = new createjs.Bitmap(imatges['cara'+smileyDUTXA]);
            anim_bany.x = 502/RESOLUTION;
            anim_bany.y = -15/RESOLUTION;
            anim_bany.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
            anim_bany.alpha=0.7;
            stage.addChild(anim_bany);
        }

        if(puntuacio >= punts_dorm )
        {

            anim_dorm = new createjs.Bitmap(imatges['cara'+smileyDORM]);
            anim_dorm.x = 744/RESOLUTION;
            anim_dorm.y = -15/RESOLUTION;
            anim_dorm.cache(0, 0, 187/RESOLUTION, 203/RESOLUTION);
            anim_dorm.alpha=0.7;
            stage.addChild(anim_dorm);
        }
    }
}

