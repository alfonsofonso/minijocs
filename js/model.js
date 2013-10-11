
Model = new function() {
this.logar = function ()
{
    var usuari = $('.canvasHolder #usuari_fancy').val();
    var contrassenya = $('.canvasHolder #clau_fancy').val();
alert("e "+usuari+ " "+contrassenya);
    if(usuari != "" && contrassenya != "")
    {
        var data = 'usuari='+usuari;
        data += '&clau='+contrassenya;

        $.ajax({
            type: "POST",
            url: "http://localhost/Biribiri/php/loginUsuari.php", // enlloc de només php/loginUsuari.php
            data: data,
            success: function(msg){
                $('.canvasHolder #usuari_fancy').val("");
                $('.canvasHolder #clau_fancy').val("");
                alert(msg);
                    if(msg == 'false'){
                        /*
                        $('.fancybox-wrap').removeClass('orange login').addClass('white dades_incorrectes');
                        $('#loginBox .boto_tornar').remove();
                        $('#loginBox').append('<a href="javascript:;" class="boto_tornar" onclick="Model.tornarLogin();">Tornar</a>');
						*/
						// MOSTRA ERROR:
						if( dispositiu_movil ) {
							$('#mainCanvas').css('opacity', '0');
						} 
						var popup = $('.hidden .popup-error').clone();
						$('.canvasHolder .popup').remove();
						$('.canvasHolder .innerWrapper').append(popup);
						$('.canvasHolder .popup-error').fadeIn(200);
						
						
                    }else{
                        if(guadar_en_joc)
                        {
                            // $.fancybox.close();
							if( dispositiu_movil ) {
								$('#mainCanvas').css('opacity', '1');
							} 	
							$('.canvasHolder .popup').remove();
							
                            if( Model.are_cookies_enabled())
                            {
                                Model.saveGame();
                            }
                            else
                            {
                                Model.saveRemoteGame(usuari,contrassenya);
                            }

                            stage.removeAllChildren();
                            Main.InitGame();
                            stage.update();
                        }
                        else
                        {
							if( dispositiu_movil ) {
								$('#mainCanvas').css('opacity', '1');
							} 
                            $('.canvasHolder .popup').remove();
							
                            InfoGame.nomSuper =  msg;
                            //Menu.changeToLogged();
                            Model.listBiribiris();
                        }
                    }
            }
        });
    }
    else
    {
		/*
		$('.fancybox-wrap').removeClass('orange login').addClass('white dades_incorrectes');
		$('#loginBox .boto_tornar').remove();
		$('#loginBox').append('<a href="javascript:;" class="boto_tornar" onclick="Model.tornarLogin();">Tornar</a>');
		*/
	
		// MOSTRA ERROR:
		if( dispositiu_movil ) {
			$('#mainCanvas').css('opacity', '0');
		} 
		var popup = $('.hidden .popup-error').clone();
		$('.canvasHolder .popup').remove();
		$('.canvasHolder .innerWrapper').append(popup);
		$('.canvasHolder .popup-error').fadeIn(200);
		
    }
}
this.tornarLogin = function() {
	/*
	$('#loginBox .boto_tornar').remove();
	$('.fancybox-wrap').removeClass('white dades_incorrectes').addClass('orange login');
	*/
	if( dispositiu_movil ) {
		$('#mainCanvas').css('opacity', '0');
	} 
	var popup = $('.hidden .popup-registrat').clone();	
	$('.canvasHolder .popup').remove();
	$('.canvasHolder .innerWrapper').append(popup);
	$('.canvasHolder .popup-registrat').fadeIn(200);
	
}
this.borrarBiribiri = function()
{
    console.log('deleteGame');
    if(UUID_delete!= "")
    {
        StorageGame.deleteItem(UUID_delete);

        var data = 'UUID='+UUID_delete;
        $.ajax({
            type: "POST",
            url: "http://localhost/Biribiri/php/deleteGame.php",
            data: data,
            success: function(msg){
                Menu.removeMenu();
                Menu.startMenu();
                stage.update();
                $.fancybox.close();
                console.log('deleted');
            }
        });
    }
}
this.saveLocalGame = function()
{
    if(InfoGame.UID != "")
    {
        StorageGame.setJoc( smileyJOC, InfoGame.UID);
        StorageGame.setMenja( smileyMENJA, InfoGame.UID);
        StorageGame.setDutxa( smileyDUTXA, InfoGame.UID);
        StorageGame.setDorm( smileyDORM, InfoGame.UID);
        StorageGame.setDate(new Date().toISOString()  ,  InfoGame.UID);
        StorageGame.setPunts( InfoGame.punts, InfoGame.UID );
        StorageGame.setBrut( 0, InfoGame.UID);
    }
}
this.saveRemoteGame = function(usuari, contrassenya)
{
    var data = 'punts='+InfoGame.punts;
    data += '&nom='+InfoGame.nomBiriBiri;
    data += '&usuari='+usuari;
    data += '&clau='+contrassenya;
    data += '&UUID='+InfoGame.UID;
    data += '&emoticJoc='+smileyJOC;
    data += '&emoticCuina='+smileyMENJA;
    data += '&emoticBany='+smileyDUTXA;
    data += '&emoticDorm='+smileyDORM;
    data += '&brut=0';

    $.ajax({
        type: "POST",
        url: "http://localhost/Biribiri/php/saveGameRemote.php",
        data: data,
        success: function(msg){

            console.log('saved');
        }
    });
}
this.saveGame = function ()
{
    console.log('saveGame');
    if(InfoGame.UID != "")
    {
        StorageGame.setJoc( smileyJOC, InfoGame.UID);
        StorageGame.setMenja( smileyMENJA, InfoGame.UID);
        StorageGame.setDutxa( smileyDUTXA, InfoGame.UID);
        StorageGame.setDorm( smileyDORM, InfoGame.UID);
        StorageGame.setDate(new Date().toISOString()  ,  InfoGame.UID);
        StorageGame.setPunts( InfoGame.punts, InfoGame.UID );
        StorageGame.setBrut( 0, InfoGame.UID);

        var data = 'punts='+InfoGame.punts;
        data += '&UUID='+InfoGame.UID;
        data += '&emoticJoc='+smileyJOC;
        data += '&emoticCuina='+smileyMENJA;
        data += '&emoticBany='+smileyDUTXA;
        data += '&emoticDorm='+smileyDORM;
        data += '&brut=0';

        $.ajax({
            type: "POST",
            url: "http://localhost/Biribiri/php/saveGame.php",
            data: data,
            success: function(msg){

                console.log('saved');
            }
        });
    }
}
this.estemLogats = function ()
{
     $.ajax({
        type: "POST",
        url: "http://localhost/Biribiri/php/estemLogats.php",
        success: function(msg){
            if(Model.are_cookies_enabled())
            {
                if(msg == 'false'){
                    Model.listBiribirisOff();
                }else{
                    InfoGame.nomSuper =  msg;
                    //Menu.changeToLogged();
                    Model.listBiribiris();
                }
            }
        }
    });
}
this.deslogar = function ()
{
    $.ajax({
        type: "POST",
        url: "http://localhost/Biribiri/php/logoutUsuari.php",
        success: function(msg){
            $.fancybox.close();
            InfoGame.nomSuper =  "";
            Menu.changeToNotLogged();
            Model.listBiribirisOff()
        }
    });

}
this.remoteToMerge = function (birisRemote)
{
    var birismerge = new Array();
    jQuery.each(birisRemote, function(index2, itemData) {

        birismerge[index2] = new Array();
        birismerge[index2]['brut'] = itemData.brut;
        birismerge[index2]['nom'] = itemData.nom;
        birismerge[index2]['punts'] = itemData.punts;
        birismerge[index2]['uuid'] = itemData.uuid;
        birismerge[index2]['emoticJoc'] = itemData.emoticJoc;
        birismerge[index2]['emoticCuina']  = itemData.emoticCuina;
        birismerge[index2]['emoticBany'] = itemData.emoticBany;
        birismerge[index2]['emoticDorm'] = itemData.emoticDorm;
        birismerge[index2]['lastdate'] = itemData.lastupdate;
    });
    return birismerge;
}
this.mergeToStorage= function (birismerge)
{
    StorageGame.deleteStorage();

    for( var index in birismerge )
    {
        if( birismerge[index]['uuid'] != "" )
        {
            StorageGame.setBiris( birismerge[index]['uuid']);
            StorageGame.setNom( birismerge[index]['nom'],birismerge[index]['uuid']);
            StorageGame.setBrut( birismerge[index]['brut'],birismerge[index]['uuid']);
            StorageGame.setPunts( birismerge[index]['punts'],birismerge[index]['uuid']);
            StorageGame.setJoc( birismerge[index]['emoticJoc'],birismerge[index]['uuid']);
            StorageGame.setMenja( birismerge[index]['emoticCuina'],birismerge[index]['uuid']);
            StorageGame.setDutxa( birismerge[index]['emoticBany'],birismerge[index]['uuid']);
            StorageGame.setDorm( birismerge[index]['emoticDorm'],birismerge[index]['uuid']);
            StorageGame.setDate( birismerge[index]['lastdate'],birismerge[index]['uuid']);
        }
    }
}
this.auxToMerge = function ( birisAux, birismerge )
{
    var index2 =  birismerge.length;
    for( var index in birisAux)
    {
        if( birisAux[index]['uuid'] != "" )
        {
            birismerge[index2] = new Array();
            birismerge[index2]['uuid'] = birisAux[index]['uuid'];
            birismerge[index2]['nom'] = birisAux[index]['nom'];
            birismerge[index2]['brut'] = birisAux[index]['brut'];
            birismerge[index2]['punts'] = birisAux[index]['punts'];
            birismerge[index2]['emoticJoc'] = birisAux[index]['emoticJoc'];
            birismerge[index2]['emoticCuina'] = birisAux[index]['emoticCuina'];
            birismerge[index2]['emoticBany'] = birisAux[index]['emoticBany'];
            birismerge[index2]['emoticDorm'] = birisAux[index]['emoticDorm'];
            birismerge[index2]['lastdate'] = birisAux[index]['lastdate'];

            index2++;
        }
    }
    return  birismerge;
}
this.newBiriBiriRemote = function (uuid )
{
    if(uuid != "")
    {
        var data = 'punts='+StorageGame.getPunts(uuid);
        data += '&nom='+StorageGame.getNom(uuid);
        data += '&UUID='+uuid;
        data += '&emoticJoc='+StorageGame.getJoc(uuid);
        data += '&emoticCuina='+StorageGame.getMenja(uuid);
        data += '&emoticBany='+StorageGame.getDutxa(uuid);
        data += '&emoticDorm='+StorageGame.getDorm(uuid);
        data += '&brut='+StorageGame.getBrut(uuid);

        $.ajax({
            type: "POST",
            url: "http://localhost/Biribiri/php/sincroBiriBiri.php",
            data: data,
            success: function(msg){

                console.log('saved');
            }
        });
    }
}
this.updateBiriBiriRemote = function (uuid )
{
    if(uuid != "")
    {
        var data = 'punts='+StorageGame.getPunts(uuid);
        data += '&nom='+StorageGame.getNom(uuid);
        data += '&UUID='+uuid;
        data += '&emoticJoc='+StorageGame.getJoc(uuid);
        data += '&emoticCuina='+StorageGame.getMenja(uuid);
        data += '&emoticBany='+StorageGame.getDutxa(uuid);
        data += '&emoticDorm='+StorageGame.getDorm(uuid);
        data += '&brut='+StorageGame.getBrut(uuid);

        $.ajax({
            type: "POST",
            url: "http://localhost/Biribiri/php/saveGame.php",
            data: data,
            success: function(msg){

                console.log('saved');
            }
        });
    }
}
this.mergeLocalRemote = function ( birisRemote, birisLocal )
{

    indexMerge=0;

    if(birisLocal != undefined && birisLocal != null)   birisLocal = birisLocal.split(",");
    else  birisLocal = new Array();

    var birismerge =  Model.remoteToMerge(birisRemote);
    var birisAux = new Array();

    for( var index1 in birisLocal)
    {
        var uuid = birisLocal[index1];
        var trobat = false;
        for( var index2 in birismerge)
        {
            if(birismerge[index2]['uuid'] == uuid)
            {
                trobat = true;
                //console.log(birismerge[index2]['punts']+" - "+StorageGame.getPunts(uuid));
                if(birismerge[index2]['punts'] >= StorageGame.getPunts(uuid))
                {
                    console.log('nothing');
                }
                else
                {
                    console.log('update');

                    birismerge[index2]['brut'] =  StorageGame.getBrut(uuid);
                    birismerge[index2]['punts'] =   StorageGame.getPunts(uuid);
                    birismerge[index2]['emoticJoc'] =  StorageGame.getJoc(uuid);
                    birismerge[index2]['emoticCuina']  =  StorageGame.getMenja(uuid);
                    birismerge[index2]['emoticBany'] =  StorageGame.getDutxa(uuid);
                    birismerge[index2]['emoticDorm'] =  StorageGame.getDorm(uuid);
                    birismerge[index2]['lastdate'] =  StorageGame.getDate(uuid);

                    Model.updateBiriBiriRemote(uuid);
                }
            }
        }

        if( !trobat )
        {
            birisAux[indexMerge] = new Array();
            birisAux[indexMerge]['brut'] =  StorageGame.getBrut(uuid);
            birisAux[indexMerge]['nom'] =  StorageGame.getNom(uuid);
            birisAux[indexMerge]['punts'] =  StorageGame.getPunts(uuid);
            birisAux[indexMerge]['uuid'] = uuid;
            birisAux[indexMerge]['emoticJoc'] = StorageGame.getJoc(uuid);
            birisAux[indexMerge]['emoticCuina']  =StorageGame.getMenja(uuid);
            birisAux[indexMerge]['emoticBany'] = StorageGame.getDutxa(uuid);
            birisAux[indexMerge]['emoticDorm'] = StorageGame.getDorm(uuid);
            birisAux[indexMerge]['lastdate'] =  StorageGame.getDate(uuid);
            indexMerge++;

            Model.newBiriBiriRemote(uuid);

        }
    }
    birismerge =  Model.auxToMerge(birisAux, birismerge);
    Model.mergeToStorage(birismerge);

    return birismerge;
}

this.listBiribiris = function ( )
{
    $.ajax({
        type: "POST",
        url: "http://localhost/Biribiri/php/getBiribiris.php",
        success: function(msg){
          //  console.log(msg);
            var birisRemote = $.parseJSON(msg);
            var birisLocal = StorageGame.getBiris();
            var birisMerge = Model.mergeLocalRemote(birisRemote,birisLocal);
            console.log(birisMerge);
            if(birisMerge.length >0)
            {
                 Menu.showListBiribirisMerge(birisMerge);
            }
            else
            {
                Menu.mostrarCrearBiribiri();
            }
        }
    });

}
this.listBiribirisOff = function ( )
{
    var biris = StorageGame.getBiris();
    if(biris != undefined && biris != null && biris != "")
    {
        biris = biris.split(",");
        Menu.showListBiribirisOff(biris);
    }
    else
    {
        Menu.mostrarCrearBiribiri();
    }
}

this.generateUUID = function ( )
{
    var hexDigits = "0123456789abcdef";
    var s = [];
    for (var i = 0; i < 13; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    var uuid = s.join("");
    return uuid;
}
this.nouBiribiri = function ( )
{
	
    var nom = $('.canvasHolder #nom_biribiri').val();
    var data = 'nom='+nom;
	
	$('.canvasHolder .error').hide();
	
    if(nom != "" )
    {
        $.ajax({
            type: "POST",
            url: "http://localhost/Biribiri/php/nouBiribiri.php",
            data: data,
            success: function(msg){
                
				if( dispositiu_movil ) {
					$('#mainCanvas').css('opacity', '1');
				} 
				$('.canvasHolder .popup-nom').fadeOut(200);
				$('.canvasHolder .popup-nom').remove();
				console.log("post success en model.js");
                $('.canvasHolder #nom_biribiri').val("");
                // $('#error_crea').hide();
                if( Model.are_cookies_enabled())
                {
                    if(msg == 'false'){

                        var uuid =  Model.generateUUID();
                        InfoGame.nomBiriBiri =  nom;
                        InfoGame.UID = uuid;

                        StorageGame.setBiris(uuid);
                        StorageGame.setNom(nom, uuid);
                        StorageGame.setPunts(0,uuid);
                        StorageGame.setJoc( 5, uuid);
                        StorageGame.setMenja( 5, uuid);
                        StorageGame.setDutxa( 5, uuid);
                        StorageGame.setDorm( 5, uuid);
                        StorageGame.setBrut( 0, uuid);
                        StorageGame.setDate(new Date().toISOString()  , uuid);
                        Model.listBiribirisOff();
                    }else{
                        InfoGame.nomBiriBiri =  nom;
                        InfoGame.UID = msg;

                        StorageGame.setBiris(msg);
                        StorageGame.setNom(nom, msg);
                        StorageGame.setPunts(0,msg);
                        StorageGame.setJoc( 5, msg);
                        StorageGame.setMenja( 5, msg);
                        StorageGame.setDutxa( 5, msg);
                        StorageGame.setDorm( 5, msg);
                        StorageGame.setBrut( 0, msg);
                        Model.listBiribiris();
                    }

                }else
                {
                    stage.removeAllChildren();
                    var uuid =  Model.generateUUID();
                    InfoGame.UID = uuid;
                    InfoGame.brut =0 ;
                    InfoGame.nomBiriBiri = nom;
                    InfoGame.punts = 0;
                    InfoGame.emoticBany =5;
                    InfoGame.emoticCuina=5;
                    InfoGame.emoticDorm=5;
                    InfoGame.emoticJoc=5;
                    Main.InitGame();
                }
            }
        });
    }
    else
    {
		/*
        $('#error_crea').hide();
        $('#error_crea').html("Nom del Biribiri erroni.");
        $('#error_crea').fadeIn('fast');
		*/
		$('.canvasHolder .error').fadeIn('fast');
    }
}
this.are_cookies_enabled = function ()
{
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled)
    {
        document.cookie="testcookie";
        cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
    }

    return (cookieEnabled);
}
}