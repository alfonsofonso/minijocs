/**
 * Created with JetBrains WebStorm.
 * User: Jordi Borrell
 * Date: 10/09/13
 * Time: 15:00
 * To change this template use File | Settings | File Templates.
 */
var fons_disfressa;
var intruccions;
var bt_juga;
var close_intruccions;
var pantalla_ok;
var pantalla_ko;
var bt_rejugar;
var bt_rebiri;

var base_biribiri;
var items_OK = new Array();
var items_KO = new Array();
var fons_items = new Array();
var items_dragged= new Array();
var titol;
var btTancar;

var jugant= true;
var jocID;

var roba_posada = new Array();

Disfressa = new  function()
{
    this.initMenu =function ()
    {
        Disfressa.cleanStage();
        Disfressa.createFons();
        Disfressa.createInstruccions();

        createjs.Ticker.addEventListener("tick", Disfressa.handleTemps);
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
    this.handleTemps = function()
    {
        stage.update();
    }
    this.createFons = function()
    {
        if( fons_disfressa == null || fons_disfressa == undefined )
        {
            fons_disfressa = new createjs.Bitmap(imatges['fons_disfressa']);
            fons_disfressa.x = 0;
            fons_disfressa.y = 0;
            fons_disfressa.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(fons_disfressa);
    }
    this.createInstruccions = function()
    {
        if( intruccions == null || intruccions == undefined )
        {
            intruccions = new createjs.Bitmap(imatges['instruccions_disfressa']);
            intruccions.x = 0;
            intruccions.y = 0;
            intruccions.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(intruccions);

            close_intruccions = new createjs.Bitmap(imatges['cancel_xelofon']);
            close_intruccions.x =  720/RESOLUTION;
            close_intruccions.y =94/RESOLUTION;
            close_intruccions.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);

        close_intruccions.addEventListener('click',  Disfressa.handlertancar);
        stage.addChild(close_intruccions);

        if( bt_juga == null || bt_juga == undefined )
        {
            bt_juga = new createjs.Bitmap(imatges['juga_disfressa']);
            bt_juga.x = 0;
            bt_juga.y = 0;
            bt_juga.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_juga);
        bt_juga.addEventListener('click',  Disfressa.handlerjugar);

    }
    this.handlertancar = function()
    {
        stage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", Disfressa.handleTemps);
        Main.InitGame();

    }
    this.handlerjugar = function()
    {
        jugant= true;
        stage.removeAllChildren();
        Disfressa.createFons();
        Disfressa.createMiniJoc();


        //Disfressa.initMenu();
    }
    this.staticElements = function()
    {
        if( base_biribiri == null || base_biribiri == undefined )
        {
            base_biribiri = new createjs.Bitmap(imatges['base_disfressa']);
            base_biribiri.x = 0;
            base_biribiri.y = 0;
            base_biribiri.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(base_biribiri);
        for( var i=0; i <6; i++ )
        {
            fons_items = new createjs.Bitmap(imatges['btIcons']);

            fons_items.x = ( i < 3 )? i * 318/RESOLUTION : (i-3) * 318/RESOLUTION;
            if(i==0 || i ==3) fons_items.x += 8;
            else if(i==1 || i ==4) fons_items.x += 4;

            fons_items.y = ( i < 3 )? 1075/RESOLUTION :  1247/RESOLUTION;
            fons_items.cache(0, 0, 318/RESOLUTION, 182/RESOLUTION);

            stage.addChild(fons_items);
        }

        //close_intruccions.addEventListener('click',  Disfressa.handlertancar);

        btTancar = new createjs.Bitmap(imatges['btCancel']);
        if( btTancar == null || btTancar == undefined )
        {
            btTancar.x = 0;
            btTancar.y = 0;
            btTancar.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(btTancar);
        btTancar.addEventListener('click',  Disfressa.handlertancar);
    }
    this.createSubmarinista = function()
    {
        Disfressa.createTitle('submarinista');
        Disfressa.createItemsOK('SUB');
        Disfressa.createItemsDalt();
    }
    this.createFutbolista = function()
    {
        Disfressa.createTitle('futbolista');
        Disfressa.createItemsOK('FUT');
        Disfressa.createItemsBaix();
    }
    this.createPallaso = function()
    {
        Disfressa.createTitle('pallaso');
        Disfressa.createItemsOK('PAI');
        Disfressa.createItemsBaix();
    }
    this.createMetge = function()
    {
        Disfressa.createTitle('metge');
        Disfressa.createItemsOK('MET');
        Disfressa.createItemsBaix();
    }
    this.createIndi = function()
    {
        Disfressa.createTitle('indi');
        Disfressa.createItemsOK('IND');
        Disfressa.createItemsDalt();
    }
    this.createTitle = function(img)
    {
        titol = new createjs.Bitmap(imatges[img]);
        titol.x = 0;
        titol.y = 0;
        titol.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        stage.addChild(titol);
    }
    this.createItemsOK= function(type)
    {
        items_OK[0] = new createjs.Bitmap(imatges[type+'1']);
        items_OK[0].id = type+'1';
        items_OK[0].x = 0;
        items_OK[0].y = 0;
        items_OK[0].cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        stage.addChild(items_OK[0]);
        items_OK[0].addEventListener('click',  this.handlerItemDisfressa);
        items_OK[0].addEventListener('mousedown',  Disfressa.handlerDragItem);

        items_OK[1] = new createjs.Bitmap(imatges[type+'2']);
        items_OK[1].id = type+'2';
        items_OK[1].x = 0;
        items_OK[1].y = 0;
        items_OK[1].cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        stage.addChild(items_OK[1]);
        items_OK[1].addEventListener('click',  this.handlerItemDisfressa);
        items_OK[1].addEventListener('mousedown',  Disfressa.handlerDragItem);

        items_OK[2] = new createjs.Bitmap(imatges[type+'3']);
        items_OK[2].id = type+'3';
        items_OK[2].x = 0;
        items_OK[2].y = 0;
        items_OK[2].cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        stage.addChild(items_OK[2]);
        items_OK[2].addEventListener('click',  this.handlerItemDisfressa);
        items_OK[2].addEventListener('mousedown',  Disfressa.handlerDragItem);
    }
    this.createItemsDalt= function()
    {
        items_KO[0] = new createjs.Bitmap(imatges['FUT3']);
        items_KO[0].id = 'FUT3';
        items_KO[0].x = 0;
        items_KO[0].y = 0;
        items_KO[0].cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        stage.addChild(items_KO[0]);
        items_KO[0].addEventListener('click',  this.handlerItemDisfressa);
        items_KO[0].addEventListener('mousedown',  Disfressa.handlerDragItem);

        items_KO[1] = new createjs.Bitmap(imatges['MET2']);
        items_KO[1].id = 'MET2';
        items_KO[1].x = 0;
        items_KO[1].y = 0;
        items_KO[1].cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        stage.addChild(items_KO[1]);
        items_KO[1].addEventListener('click',  this.handlerItemDisfressa);
        items_KO[1].addEventListener('mousedown',  Disfressa.handlerDragItem);

        items_KO[2] = new createjs.Bitmap(imatges['PAI3']);
        items_KO[2].id = 'PAI3';
        items_KO[2].x = 0;
        items_KO[2].y = 0;
        items_KO[2].cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        stage.addChild(items_KO[2]);
        items_KO[2].addEventListener('click',  this.handlerItemDisfressa);
        items_KO[2].addEventListener('mousedown',  Disfressa.handlerDragItem);
    }
    this.createItemsBaix= function()
    {
        items_KO[0] = new createjs.Bitmap(imatges['IND1']);
        items_KO[0].id = 'IND1';
        items_KO[0].x = 0;
        items_KO[0].y = 0;
        items_KO[0].cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        stage.addChild(items_KO[0]);
        items_KO[0].addEventListener('click',  this.handlerItemDisfressa);
        items_KO[0].addEventListener('mousedown',  Disfressa.handlerDragItem);

        items_KO[1] = new createjs.Bitmap(imatges['SUB2']);
        items_KO[1].id = 'SUB2';
        items_KO[1].x = 0;
        items_KO[1].y = 0;
        items_KO[1].cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        stage.addChild(items_KO[1]);
        items_KO[1].addEventListener('click',  this.handlerItemDisfressa);
        items_KO[1].addEventListener('mousedown',  Disfressa.handlerDragItem);

        items_KO[2] = new createjs.Bitmap(imatges['IND3']);
        items_KO[2].id = 'IND3';
        items_KO[2].x = 0;
        items_KO[2].y = 0;
        items_KO[2].cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        stage.addChild(items_KO[2]);
        items_KO[2].addEventListener('click',  this.handlerItemDisfressa);
        items_KO[2].addEventListener('mousedown',  Disfressa.handlerDragItem);

    }
    this.dinamicElements = function()
    {
        jocID = Math.ceil( Math.random() * 5 );
        switch(jocID)
        {
            case 1: Disfressa.createSubmarinista();
                break;
            case 2: Disfressa.createFutbolista();
                break;
            case 3: Disfressa.createIndi();
                break;
            case 4: Disfressa.createPallaso();
                break;
            case 5: Disfressa.createMetge();
                break;
        }
    }
    this.createMiniJoc = function()
    {
        Disfressa.staticElements();
        Disfressa.dinamicElements();


    }
    this.handlerItemDisfressa  = function (event)
    {
        Audio.sonaOBJ();
        drag_item = event.target;
        drag_item.removeEventListener('tick', Disfressa.handlerDragMove);
        drag_item.x = 0;
        drag_item.y = 0;

        if( items_KO.indexOf( drag_item) >= 0 && jugant )
        {
            items_dragged = new Array();
            roba_posada = new Array();
            jugant= false;
            Audio.sonaMEC();
            setTimeout(Disfressa.showLoseScreen,1000);
        }
        if( items_OK.indexOf( drag_item) >= 0 && jugant)
        {
            console.log("objecte agafat: "+items_dragged.indexOf(drag_item));
            if( items_dragged.indexOf(drag_item) < 0 )
            {
                if(drag_item.id == "FUT1") Disfressa.insertRoba("1fut");
                if(drag_item.id == "FUT2") Disfressa.insertRoba("2fut");
                if(drag_item.id == "FUT3") Disfressa.insertRoba("3fut");
                if(drag_item.id == "IND1") Disfressa.insertRoba("1ind");
                if(drag_item.id == "IND2") Disfressa.insertRoba("2ind");
                if(drag_item.id == "IND3") Disfressa.insertRoba("3ind");
                if(drag_item.id == "MET1") Disfressa.insertRoba("1met");
                if(drag_item.id == "MET2") Disfressa.insertRoba("2met");
                if(drag_item.id == "MET3") Disfressa.insertRoba("3met");
                if(drag_item.id == "PAI1") Disfressa.insertRoba("1pai");
                if(drag_item.id == "PAI2") Disfressa.insertRoba("2pai");
                if(drag_item.id == "PAI3") Disfressa.insertRoba("3pai");
                if(drag_item.id == "SUB1") Disfressa.insertRoba("1sub");
                if(drag_item.id == "SUB2") Disfressa.insertRoba("3sub");
                if(drag_item.id == "SUB3") Disfressa.insertRoba("2sub");

                items_dragged.push(drag_item);

                Disfressa.ordenarRoba();
            }

            if(items_dragged.length == 3 )
            {
                items_dragged = new Array();
                roba_posada = new Array();
                jugant= false;
                Audio.sonaJOC();
                setTimeout(Disfressa.showWinScreen,2000);
            }
        }

    }
    this.ordenarRoba = function()
    {
        console.log(jocID);
        console.log(roba_posada) ;
        switch(jocID)
        {
            case 1://submarinista
                for(var i=0; i< roba_posada.length; i++){
                    if(roba_posada[i].id == "1sub")  stage.setChildIndex(roba_posada[i], stage.getNumChildren()-1);
                }
                break;
            case 2: //futbolista
                    for(var i=0; i< roba_posada.length; i++){
                        if(roba_posada[i].id  == "1fut")  stage.setChildIndex(roba_posada[i], stage.getNumChildren()-1);
                    }
                break;
            case 3://indi
                    for(var i=0; i< roba_posada.length; i++){
                        if(roba_posada[i].id  == "3ind")  stage.setChildIndex(roba_posada[i], stage.getNumChildren()-1);
                    }
                break;
            case 4: //pallaso
                    for(var i=0; i< roba_posada.length; i++){
                        if(roba_posada[i].id  == "3pai")  stage.setChildIndex(roba_posada[i], stage.getNumChildren()-1);
                    }
                break;
            case 5: //metge
                    for(var i=0; i< roba_posada.length; i++){
                        if(roba_posada[i].id  == "3met")  stage.setChildIndex(roba_posada[i], stage.getNumChildren()-1);
                     }
                break;
        }
    }
    this.handlerDragItem  = function (event)
    {
        drag_item = event.target;
        drag_X =  stage.mouseX - drag_item.x;
        drag_Y =  stage.mouseY - drag_item.y;
        drag_item.addEventListener('tick', Disfressa.handlerDragMove);
        stage.setChildIndex(drag_item, stage.getNumChildren()-1);
    }
    this.showLoseScreen =  function()
    {
        //stage.removeAllChildren();

        Disfressa.createFons();
        if( pantalla_ko == null || pantalla_ko == undefined )
        {
            pantalla_ko = new createjs.Bitmap(imatges['pantallaERROR']);
            pantalla_ko.x = 0;
            pantalla_ko.y = 0;
            pantalla_ko.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(pantalla_ko);

            close_intruccions = new createjs.Bitmap(imatges['cancel_xelofon']);
            close_intruccions.x =  680/RESOLUTION;
            close_intruccions.y =36/RESOLUTION;
            close_intruccions.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);

        close_intruccions.addEventListener('click',  Disfressa.handlertancar);
        stage.addChild(close_intruccions);

        if( bt_rejugar == null || bt_rejugar == undefined )
        {
            bt_rejugar = new createjs.Bitmap(imatges['boto_tornar']);
            bt_rejugar.x = 0;
            bt_rejugar.y = 0;
            bt_rejugar.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_rejugar);
        bt_rejugar.addEventListener('click',  Disfressa.handlerjugar);
        if( bt_rebiri == null || bt_rebiri == undefined )
        {
            bt_rebiri = new createjs.Bitmap(imatges['botobiri']);
            bt_rebiri.x = 0;
            bt_rebiri.y = 0;
            bt_rebiri.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_rebiri);
        bt_rebiri.addEventListener('click',  Disfressa.handlertancar);

    }
    this.showWinScreen =  function()
    {
        //stage.removeAllChildren();

        InfoGame.punts += 50;
        puntuacio += 50;
        Disfressa.createFons();
        if( pantalla_ok == null || pantalla_ok == undefined )
        {
            pantalla_ok = new createjs.Bitmap(imatges['pantallaOK']);
            pantalla_ok.x = 0;
            pantalla_ok.y = 0;
            pantalla_ok.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(pantalla_ok);

            close_intruccions = new createjs.Bitmap(imatges['cancel_xelofon']);
            close_intruccions.x =  680/RESOLUTION;
            close_intruccions.y =36/RESOLUTION;
            close_intruccions.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);

        close_intruccions.addEventListener('click',  Disfressa.handlertancar);
        stage.addChild(close_intruccions);

        if( bt_rejugar == null || bt_rejugar == undefined )
        {
            bt_rejugar = new createjs.Bitmap(imatges['boto_tornar']);
            bt_rejugar.x = 0;
            bt_rejugar.y = 0;
            bt_rejugar.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_rejugar);
        bt_rejugar.addEventListener('click',  Disfressa.handlerjugar);

        if( bt_rebiri == null || bt_rebiri == undefined )
        {
            bt_rebiri = new createjs.Bitmap(imatges['botobiri']);
            bt_rebiri.x = 0;
            bt_rebiri.y = 0;
            bt_rebiri.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(bt_rebiri);
        bt_rebiri.addEventListener('click',  Disfressa.handlertancar);

    }
    this.handlerDragMove = function(event)
    {
        drag_item = event.target;

        drag_item.x = stage.mouseX - drag_X;
        drag_item.y = stage.mouseY - drag_Y;
        if(Disfressa.tocaBiribiri())
        {
            Disfressa.handlerItemDisfressa(event);
        }
    }
    this.insertRoba = function(roba)
    {
        var element;

        element = new createjs.Bitmap(imatges[roba]);
        element.x = 0;
        element.y = 0;
        element.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        element.id = roba;

        stage.addChild(element);
        roba_posada.push(element);
    }
    this.tocaBiribiri= function( )
    {
        posX = stage.mouseX ;
        posY = stage.mouseY;

        return   base_biribiri.hitTest(posX,posY);
    }
}