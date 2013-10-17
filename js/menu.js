/**
 * Created with JetBrains WebStorm.
 * User: Jordi Borrell
 * Date: 24/07/13
 * Time: 15:59
 * To change this template use File | Settings | File Templates.
 */

var btCrearBiribiri;
var txtCrearBiribiri;
var txtTeusBiribiris;
var btLogar;
var btDeslogar;
var txtLogar;
var txtDeslogar;
var txtUserName;
var birisbiris;
var page=0;
var btSeguent;
var btAnterior;
var txtSeguent;
var txtAnterior;
var fons_menu;
var bt_logar;
var bt_noubiri;
var pestanya_biri;
var BIRIS_PER_PAGE = 6;
var UUID_delete;
var bt_crea;
var pop_crear;
var presentacio;
var btpresentacio;
var dits;
var elimina;
var esborra;
var torna;
var tornada;
var torna_presentacio;

Menu=new  function() {
    this.initMenu = function ()
    {
        Menu.benvinguda();
    }
    this.benvinguda = function()
    {

        if( presentacio == null || presentacio == undefined )
        {
            presentacio = new createjs.Bitmap(imatges['presentacio']);
            //btCrearBiribiri.graphics.beginFill("red").drawCircle(0, 0, 40);
            presentacio.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
            presentacio.x = 0/RESOLUTION;
            presentacio.y = 0/RESOLUTION;
        }
        stage.addChild(presentacio);
        if( btpresentacio == null || btpresentacio == undefined )
        {
            btpresentacio = new createjs.Bitmap(imatges['btpresentacio']);
            btpresentacio.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
            btpresentacio.y = 0/RESOLUTION;
            btpresentacio.x = 0/RESOLUTION;
        }
        stage.addChild(btpresentacio);
        btpresentacio.addEventListener('mousedown',  Menu.handlerPresentacio);

        if( dits == null || dits == undefined )
        {
            dits = new createjs.Bitmap(imatges['dits']);
            dits.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
            dits.y = 0/RESOLUTION;
            dits.x = 0/RESOLUTION;
        }
        stage.addChild(dits);

        if( tornada == null || tornada == undefined )
        {
            tornada = new createjs.Bitmap(imatges['fora_biri']);
            tornada.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
            tornada.y = 0/RESOLUTION;
            tornada.x = 0/RESOLUTION;
        }
        stage.addChild(tornada);
        tornada.addEventListener('mousedown',  Menu.handlerFora);
        stage.update();
        $("#background").css('background-color','#FFC400');

    }
    this.handlerFora = function()
    {
        history.back();
    }
    this.handlerPresentacio = function()
    {
        stage.removeAllChildren();
        Menu.startMenu();
    }
    this.startMenu = function()
    {
        Menu.createFons();
        Menu.createbotons();
        //Menu.createTextes();

        //Menu.createTextes();
        stage.removeChild(percent);
        Main.windowResize();
        $("#background").css('background-color','#FFB800');
        stage.update();

    }
    this.createFons = function()
    {
        if( fons_menu == null || fons_menu == undefined )
        {
            fons_menu = new createjs.Bitmap(imatges['fons_menu']);
            fons_menu.x = 0;
            fons_menu.y = 0;
            fons_menu.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(fons_menu);

    }
    this.createTextes = function ()
    {
        Menu.teusBiris();

    }
    this.teusBiris  = function ()
    {
        if( txtTeusBiribiris == null || txtTeusBiribiris == undefined )
        {
            txtTeusBiribiris = new createjs.Text("Els teus BiriBiris", "bold "+(40/RESOLUTION)+"px BoldinaScript", "#111111");
            txtTeusBiribiris.textBaseline = "alphabetic";
            txtTeusBiribiris.y = 225/RESOLUTION;
            txtTeusBiribiris.x = 140/RESOLUTION;
        }
        alert("teusBiris");
        stage.addChild(txtTeusBiribiris);
    }
    this.createbotons = function ()
    {
        Menu.createNouBiribiri();
        Menu.createLogar();
        Menu.createSeguent();
        Menu.createAnterior();
        Menu.createTornar();
        Model.estemLogats();
    }
    this.createTornar= function()
    {
        if( torna_presentacio == null || torna_presentacio == undefined )
        {
            torna_presentacio = new createjs.Bitmap(imatges['torna_presentacio']);
            torna_presentacio.x = 0/RESOLUTION;
            torna_presentacio.y = 0/RESOLUTION;
            torna_presentacio.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }
        stage.addChild(torna_presentacio);
        torna_presentacio.addEventListener('mousedown',  Menu.handlerTorna);
    }
    this.handlerTorna = function()
    {
        stage.removeAllChildren();
        Menu.benvinguda();
    }
    this.createLogar  = function ()
    {
        if( bt_logar == null || bt_logar == undefined )
        {
            bt_logar = new createjs.Bitmap(imatges['logar']);
            bt_logar.x = 137/RESOLUTION;
            bt_logar.y = 75/RESOLUTION;
            bt_logar.cache(0, 0, 682/RESOLUTION, 152/RESOLUTION);
        }
        stage.addChild(bt_logar);
        bt_logar.addEventListener('mousedown',  Menu.handlerLogar);
    }

    this.changeToLogged = function ()
    {
        stage.removeChild(bt_logar);
        //stage.removeChild(txtLogar);
        if( btDeslogar == null || btDeslogar == undefined )
        {
            btDeslogar = new createjs.Shape();
            btDeslogar.graphics.beginFill("red").drawRoundRect (0, 0, 225/RESOLUTION, 100/RESOLUTION,5);
            //btCrearBiribiri.graphics.beginFill("red").drawCircle(0, 0, 40);
            btDeslogar.cache(0, 0, 225/RESOLUTION, 100/RESOLUTION);
            btDeslogar.x = 550/RESOLUTION;
            btDeslogar.y = 140/RESOLUTION;
        }
        stage.addChild(btDeslogar);
        if( txtDeslogar == null || txtDeslogar == undefined )
        {
            txtDeslogar = new createjs.Text("Deslogar", "bold "+(40/RESOLUTION)+"px BoldinaScript", "#111111");
            txtDeslogar.textBaseline = "alphabetic";
            txtDeslogar.y = 210/RESOLUTION;
            txtDeslogar.x = 580/RESOLUTION;
        }


        stage.addChild(txtDeslogar);
        btDeslogar.addEventListener('mousedown',  this.handlerDeslogar);

        /*txtUserName = new createjs.Text(InfoGame.nomSuper, "bold italic "+(35/RESOLUTION)+"px Arial", "#888");
        txtUserName.textBaseline = "alphabetic";
        txtUserName.y = 100/RESOLUTION;
        txtUserName.x = 400/RESOLUTION;
        stage.addChild(txtUserName); */

        stage.update();

    }
    this.changeToNotLogged = function ()
    {
        //stage.removeChild(btDeslogar);
        //stage.removeChild(txtDeslogar);
       // stage.removeChild(txtUserName);

        Menu.createLogar();

        stage.update();
    }
    this.createAnterior = function()
    {
        if( btAnterior == null || btAnterior == undefined )
        {
            btAnterior = new createjs.Bitmap(imatges['anterior']);
            btAnterior.cache(-0, -0, 128/RESOLUTION, 128/RESOLUTION);
            btAnterior.x = 20/RESOLUTION;
            btAnterior.y = 1150/RESOLUTION;
        }
        stage.addChild(btAnterior);
        btAnterior.visible=false;
        btAnterior.addEventListener('mousedown',  this.handlerPagePrevious);
    }
    this.handlerPagePrevious = function()
    {
        if(page >0) page--;
        else return;

        if(page > 0) btAnterior.visible=true;
        else btAnterior.visible=false;

        btSeguent.visible = true;

        if(birisbiris != undefined && birisbiris != null )
        {
            for( var index in birisbiris)
            {
                console.log(index);
                stage.removeChild(birisbiris[index]['fons']);
                stage.removeChild(birisbiris[index]['text']);
                stage.removeChild(birisbiris[index]['tancar']);
            }

            for( var index =(page*BIRIS_PER_PAGE); index < birisbiris.length && index < (page+1)*BIRIS_PER_PAGE  ; index++)
            {
                birisbiris[index]['fons'].x = 160/RESOLUTION ;
                birisbiris[index]['fons'].y = 345/RESOLUTION + (index-page*BIRIS_PER_PAGE)*145/RESOLUTION;
                stage.addChild(birisbiris[index]['fons']);

                birisbiris[index]['text'].y = 440/RESOLUTION + (index-page*BIRIS_PER_PAGE)*145/RESOLUTION;
                birisbiris[index]['text'].x = 345/RESOLUTION ;
                stage.addChild( birisbiris[index]['text'] );

                birisbiris[index]['tancar'].x = 690/RESOLUTION ;
                birisbiris[index]['tancar'].y = 375/RESOLUTION + (index-page*BIRIS_PER_PAGE)*145/RESOLUTION;
                stage.addChild( birisbiris[index]['tancar']);
            }
        }
        stage.update();
    }
    this.createSeguent = function()
    {
        if( btSeguent == null || btSeguent == undefined )
        {
            btSeguent = new createjs.Bitmap(imatges['seguent']);
            btSeguent.cache(-0, -0, 128/RESOLUTION, 128/RESOLUTION);
            btSeguent.x = 805/RESOLUTION;
            btSeguent.y = 1150/RESOLUTION;
        }
        stage.addChild(btSeguent);
        btSeguent.visible=false;
        btSeguent.addEventListener('mousedown',  this.handlerPageNext);
    }
    this.handlerPageNext = function()
    {

        if(page < Math.floor((birisbiris.length-1)/BIRIS_PER_PAGE)) page++;
        else return;

        if(page < Math.floor((birisbiris.length-1)/BIRIS_PER_PAGE)) btSeguent.visible=true;
        else btSeguent.visible=false;

        btAnterior.visible = true;

        if(birisbiris != undefined && birisbiris != null )
        {
            for( var index in birisbiris)
            {
                console.log(index);
                stage.removeChild(birisbiris[index]['fons']);
                stage.removeChild(birisbiris[index]['text']);
                stage.removeChild(birisbiris[index]['tancar']);

            }

            for( var index =(page*BIRIS_PER_PAGE); index < birisbiris.length && index < (page+1)*BIRIS_PER_PAGE  ; index++)
            {

                birisbiris[index]['fons'].x = 160/RESOLUTION ;
                birisbiris[index]['fons'].y = 345/RESOLUTION + (index-page*BIRIS_PER_PAGE)*145/RESOLUTION;
                stage.addChild(birisbiris[index]['fons']);

                birisbiris[index]['text'].y = 440/RESOLUTION + (index-page*BIRIS_PER_PAGE)*145/RESOLUTION;
                birisbiris[index]['text'].x = 345/RESOLUTION ;
                stage.addChild( birisbiris[index]['text'] );


                birisbiris[index]['tancar'].x = 690/RESOLUTION ;
                birisbiris[index]['tancar'].y = 375/RESOLUTION + (index-page*BIRIS_PER_PAGE)*145/RESOLUTION;
                stage.addChild( birisbiris[index]['tancar']);

            }
        }
        stage.update();
    }
    this.mostrarCrearBiribiri = function()
    {
        if( pop_crear == null || pop_crear == undefined )
        {
            pop_crear = new createjs.Bitmap(imatges['pop_crear']);
            pop_crear.x = 0/RESOLUTION;
            pop_crear.y = 0/RESOLUTION;
            pop_crear.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(pop_crear);

        if( bt_crea == null || bt_crea == undefined )
        {
            bt_crea = new createjs.Bitmap(imatges['bt_crea']);
            bt_crea.x = 175/RESOLUTION;
            bt_crea.y = 1100/RESOLUTION;
            bt_crea.cache(0, 0, 604/RESOLUTION, 176/RESOLUTION);
        }

        stage.addChild(bt_crea);
        bt_crea.addEventListener('click',  Menu.handlerCrea);

        bt_noubiri.removeEventListener('mousedown',  Menu.handlerCreaBiriBiri);
        bt_logar.removeEventListener('mousedown',  Menu.handlerLogar);

        stage.update();
    }
    this.eliminaBiribiri = function()
    {
        stage.removeAllChildren();
        if( elimina == null || elimina == undefined )
        {
            elimina = new createjs.Bitmap(imatges['base_elimina']);
            elimina.x = 0/RESOLUTION;
            elimina.y = 0/RESOLUTION;
            elimina.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(elimina);

        if( esborra == null || esborra == undefined )
        {
            esborra = new createjs.Bitmap(imatges['esborrar_biri']);
            esborra.x = 0/RESOLUTION;
            esborra.y = 0/RESOLUTION;
            esborra.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(esborra);
        esborra.addEventListener('click',  Menu.handlerEliminaBiri);

        if( torna == null || torna == undefined )
        {
            torna = new createjs.Bitmap(imatges['torna_cookie']);
            torna.x = 0/RESOLUTION;
            torna.y = 0/RESOLUTION;
            torna.cache(0, 0, 960/RESOLUTION, 1440/RESOLUTION);
        }

        stage.addChild(torna);
        torna.addEventListener('click',  Menu.handlerTornaElimina);

        stage.update();
    }
    this.handlerEliminaBiri = function()
    {
        stage.removeAllChildren();
        Model.borrarBiribiri();
        Menu.startMenu();
    }
    this.handlerTornaElimina = function()
    {
        stage.removeAllChildren();
        Menu.startMenu();
    }
    this.handlerCrea = function()
    {
        stage.removeChild(bt_crea);
        stage.removeChild(pop_crear);

        bt_noubiri.addEventListener('mousedown',  Menu.handlerCreaBiriBiri);
        bt_logar.addEventListener('mousedown',  Menu.handlerLogar);

        Menu.handlerCreaBiriBiri();
        stage.update();
    }
    this.createNouBiribiri  = function  ()
    {

        if( bt_noubiri == null || bt_noubiri == undefined )
        {
            bt_noubiri = new createjs.Bitmap(imatges['noubiri']);
            bt_noubiri.x = 135/RESOLUTION;
            bt_noubiri.y = 1225/RESOLUTION;
            bt_noubiri.cache(0, 0, 682/RESOLUTION, 152/RESOLUTION);
        }

        stage.addChild(bt_noubiri);
        bt_noubiri.addEventListener('mousedown',  Menu.handlerCreaBiriBiri);

    }
    this.showListBiribirisMerge= function (biris)
    {
        if(birisbiris != undefined && birisbiris != null )
        {
            for( var index in birisbiris)
            {
                //console.log(index);
                stage.removeChild(birisbiris[index]['fons']);
                stage.removeChild(birisbiris[index]['text']);
                stage.removeChild(birisbiris[index]['tancar']);
            }
        }
        page=0;
        birisbiris = new Array()
        if(biris != undefined && biris != null)
        {
            for( var index in biris)
            {

                birisbiris[index]   = new Array();
                birisbiris[index]['fons'] = new createjs.Bitmap(imatges['pestanya_biri']);
                birisbiris[index]['fons'].cache(0, 0, 686/RESOLUTION, 150/RESOLUTION);
                birisbiris[index]['fons'].x = 160/RESOLUTION ;
                birisbiris[index]['fons'].y = 345/RESOLUTION + index*145/RESOLUTION;
                birisbiris[index]['fons'].id = index;


                if( index < BIRIS_PER_PAGE )
                    stage.addChild(birisbiris[index]['fons']);

                birisbiris[index]['fons'].addEventListener ('mousedown',  Menu.handlerMenuItemBiribiri);

                birisbiris[index]['text'] = new createjs.Text( biris[index]['nom'] , "bold "+(40/RESOLUTION)+"px BoldinaTwo", "#001145");
                birisbiris[index]['text'].textBaseline = "alphabetic";
                birisbiris[index]['text'].y = 440/RESOLUTION + index*145/RESOLUTION;
                birisbiris[index]['text'].x = 345/RESOLUTION ;

                birisbiris[index]['brut'] = biris[index]['brut'];
                birisbiris[index]['nom']  =  biris[index]['nom'];
                birisbiris[index]['punts']=  biris[index]['punts'];
                birisbiris[index]['uuid']  = biris[index]['uuid'];
                birisbiris[index]['emoticJoc'] = biris[index]['emoticJoc'];
                birisbiris[index]['emoticCuina']  = biris[index]['emoticCuina'];
                birisbiris[index]['emoticBany']=  biris[index]['emoticBany'];
                birisbiris[index]['emoticDorm']  = biris[index]['emoticDorm'];

                if( index < BIRIS_PER_PAGE )
                    stage.addChild( birisbiris[index]['text'] );

                birisbiris[index]['tancar'] = new createjs.Bitmap(imatges['botoCLOSE']);
                birisbiris[index]['tancar'].cache(0, 0, 116/RESOLUTION, 116/RESOLUTION);
                birisbiris[index]['tancar'].x = 690/RESOLUTION ;
                birisbiris[index]['tancar'].y = 375/RESOLUTION + index*145/RESOLUTION;
                birisbiris[index]['tancar'].scaleX = birisbiris[index]['tancar'].scaleY =0.70;
                birisbiris[index]['tancar'].id = index;

                if( index < BIRIS_PER_PAGE )
                    stage.addChild( birisbiris[index]['tancar']);

                birisbiris[index]['tancar'].addEventListener ('mousedown',  Menu.handlerDeleteBiribiri);
            }
        }
        btAnterior.visible = false;
        if(0 < Math.floor((birisbiris.length-1)/BIRIS_PER_PAGE)) btSeguent.visible=true;
        else btSeguent.visible=false;

        stage.update();
    }
    this.showListBiribirisOff = function(biris)
    {
        if(birisbiris != undefined && birisbiris != null )
        {
            for( var index in birisbiris)
            {
                //console.log(index);
                stage.removeChild(birisbiris[index]['fons']);
                stage.removeChild(birisbiris[index]['text']);
                stage.removeChild(birisbiris[index]['tancar']);
            }
        }
        page=0;
        birisbiris = new Array()
        if(biris != undefined && biris != null)
        {
            for( var index in biris)
            {
                var uuid = biris[index];
                if(index == biris.length-1 ) break;

                birisbiris[index]   = new Array();
                birisbiris[index]['fons'] = new createjs.Bitmap(imatges['pestanya_biri']);
                birisbiris[index]['fons'].cache(0, 0, 686/RESOLUTION, 150/RESOLUTION);
                birisbiris[index]['fons'].x = 160/RESOLUTION ;
                birisbiris[index]['fons'].y = 345/RESOLUTION + index*145/RESOLUTION;
                birisbiris[index]['fons'].id = index;

               /* bt_noubiri = new createjs.Bitmap(imatges['noubiri']);
                bt_noubiri.x = 135/RESOLUTION;
                bt_noubiri.y = 1225/RESOLUTION;
                bt_noubiri.cache(0, 0, 682/RESOLUTION, 152/RESOLUTION);    */

                if( index < BIRIS_PER_PAGE )
                    stage.addChild(birisbiris[index]['fons']);

                birisbiris[index]['fons'].addEventListener ('mousedown',  Menu.handlerMenuItemBiribiri);

                birisbiris[index]['text'] = new createjs.Text( StorageGame.getNom(uuid) , "bold "+(40/RESOLUTION)+"px BoldinaTwo", "#001145");
                birisbiris[index]['text'].textBaseline = "alphabetic";
                birisbiris[index]['text'].y = 440/RESOLUTION + index*145/RESOLUTION;
                birisbiris[index]['text'].x = 345/RESOLUTION ;

                if( index < BIRIS_PER_PAGE )
                    stage.addChild( birisbiris[index]['text'] );

                birisbiris[index]['brut'] =  StorageGame.getBrut(uuid);
                birisbiris[index]['nom']  =  StorageGame.getNom(uuid);
                birisbiris[index]['punts']=  StorageGame.getPunts(uuid);
                birisbiris[index]['uuid']  = uuid;
                birisbiris[index]['emoticJoc'] = StorageGame.getJoc(uuid);
                birisbiris[index]['emoticCuina']  = StorageGame.getMenja(uuid);
                birisbiris[index]['emoticBany']=  StorageGame.getDutxa(uuid);
                birisbiris[index]['emoticDorm']  =  StorageGame.getDorm(uuid);

                birisbiris[index]['tancar'] = new createjs.Bitmap(imatges['botoCLOSE']);
                birisbiris[index]['tancar'].cache(0, 0, 116/RESOLUTION, 116/RESOLUTION);
                birisbiris[index]['tancar'].x = 690/RESOLUTION ;
                birisbiris[index]['tancar'].y = 375/RESOLUTION + index*145/RESOLUTION;
                birisbiris[index]['tancar'].scaleX = birisbiris[index]['tancar'].scaleY =0.70;
                birisbiris[index]['tancar'].id = index;

                if( index < BIRIS_PER_PAGE )
                    stage.addChild( birisbiris[index]['tancar']);
                birisbiris[index]['tancar'].addEventListener ('mousedown',  Menu.handlerDeleteBiribiri);
            }
        }
        btAnterior.visible = false;
        if(0 < Math.floor((birisbiris.length-1)/BIRIS_PER_PAGE)) btSeguent.visible=true;
        else btSeguent.visible=false;
        stage.update();
    }
    this.showListBiribiris = function(biris)
    {
        if(birisbiris != undefined && birisbiris != null )
        {
            for( var index in birisbiris)
            {
                //console.log(index);
                stage.removeChild(birisbiris[index]['fons']);
                stage.removeChild(birisbiris[index]['text']);
                stage.removeChild(birisbiris[index]['tancar']);
            }
        }
        page=0;
        birisbiris = new Array();

        jQuery.each(biris, function(index, itemData) {
            //  alert(itemData.brut);   alert(itemData.nom);    alert(itemData.punts);    alert(itemData.uuid);
            birisbiris[index]   = new Array();
            birisbiris[index]['fons'] = new createjs.Bitmap(imatges['pestanya_biri']);
            birisbiris[index]['fons'].cache(0, 0, 686/RESOLUTION, 150/RESOLUTION);
            birisbiris[index]['fons'].x = 160/RESOLUTION ;
            birisbiris[index]['fons'].y = 345/RESOLUTION + index*145/RESOLUTION;
            birisbiris[index]['fons'].id = index;

            if( index < BIRIS_PER_PAGE )
                stage.addChild(birisbiris[index]['fons']);

            birisbiris[index]['fons'].addEventListener ('mousedown',  Menu.handlerMenuItemBiribiri);

            birisbiris[index]['text'] = new createjs.Text( itemData.nom , "bold "+(40/RESOLUTION)+"px BoldinaTwo", "#001145");
            birisbiris[index]['text'].textBaseline = "alphabetic";
            birisbiris[index]['text'].y = 440/RESOLUTION + index*145/RESOLUTION;
            birisbiris[index]['text'].x = 345/RESOLUTION ;

            birisbiris[index]['brut'] = itemData.brut;
            birisbiris[index]['nom']  = itemData.nom;
            birisbiris[index]['punts']= itemData.punts;
            birisbiris[index]['uuid']  = itemData.uuid;
            birisbiris[index]['emoticJoc'] = itemData.emoticJoc;
            birisbiris[index]['emoticCuina']  = itemData.emoticCuina;
            birisbiris[index]['emoticBany']= itemData.emoticBany;
            birisbiris[index]['emoticDorm']  = itemData.emoticDorm;
            birisbiris[index]['lastdate']  = itemData.lastupdate;

            if( index < BIRIS_PER_PAGE )
                stage.addChild(birisbiris[index]['text']);

            birisbiris[index]['tancar'] = new createjs.Bitmap(imatges['botoCLOSE']);
            birisbiris[index]['tancar'].cache(0, 0, 116/RESOLUTION, 116/RESOLUTION);
            birisbiris[index]['tancar'].x = 660/RESOLUTION ;
            birisbiris[index]['tancar'].y = 375/RESOLUTION + index*145/RESOLUTION;
            birisbiris[index]['tancar'].scaleX = birisbiris[index]['tancar'].scaleY =0.70;
            birisbiris[index]['tancar'].id = index;

            if( index < BIRIS_PER_PAGE )
                stage.addChild( birisbiris[index]['tancar']);
            birisbiris[index]['tancar'].addEventListener ('mousedown',  Menu.handlerDeleteBiribiri);
        });
        btAnterior.visible = false;
        if(0 < Math.floor((birisbiris.length-1)/BIRIS_PER_PAGE)) btSeguent.visible=true;
        else btSeguent.visible=false;

        stage.update();
    }
    this.removeMenu = function()
    {
        stage.removeAllChildren();

    }

    this.handlerMenuItemBiribiri = function(event)
    {
        InfoGame.nomBiriBiri =  birisbiris[event.target.id]['nom'];
        InfoGame.punts=  birisbiris[event.target.id]['punts'];
        InfoGame.UID = birisbiris[event.target.id]['uuid'];
        InfoGame.brut = birisbiris[event.target.id]['brut'];
        InfoGame.emoticJoc = birisbiris[event.target.id]['emoticJoc'];
        InfoGame.emoticCuina = birisbiris[event.target.id]['emoticCuina'];
        InfoGame.emoticBany = birisbiris[event.target.id]['emoticBany'];
        InfoGame.emoticDorm = birisbiris[event.target.id]['emoticDorm'];
        Menu.removeMenu();
        currentEscena = "JOC";
        lastEscena = 4;
        Main.InitGame();
    }
    this.handlerDeleteBiribiri = function(event)
    {
        UUID_delete = birisbiris[event.target.id]['uuid'];
        console.log(UUID_delete);
        Menu.eliminaBiribiri();
       // $('#borrarBiri').click();
    }
    this.handlerCreaBiriBiri = function()
    {
        alert("HandlerCreaNouBiribiri");
		if( dispositiu_movil ) {
			$('#mainCanvas').css('opacity', '0');
		} 
		var popup = $('.hidden .popup-nom').clone();
		$('.canvasHolder .popup').remove();
		$('.canvasHolder .innerWrapper').append(popup);
		$('.canvasHolder .popup-nom').fadeIn(200);    
	}
    this.handlerLogar = function()
    {
        guadar_en_joc = false;
		if( dispositiu_movil ) {
			$('#mainCanvas').css('opacity', '0');
		} 
		var popup = $('.hidden .popup-registrat').clone();
		$('.canvasHolder .popup').remove();		
		$('.canvasHolder .innerWrapper').append(popup);
		$('.canvasHolder .popup-registrat').fadeIn(200);
		
        //$('#error_login').hide();
       // $('#login').click();
    }
    this.handlerDeslogar = function()
    {
        Model.deslogar();
    }
}