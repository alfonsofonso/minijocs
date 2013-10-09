/**
 * Created with JetBrains WebStorm.
 * User: Jordi Borrell
 * Date: 23/07/13
 * Time: 12:40
 * To change this template use File | Settings | File Templates.
 */

InfoGame=new function() {

    this.nomBiriBiri = "";
    this.punts= 0;
    this.nomSuper="";
    this.UID ="";
    this.brut ="";
    this.emoticJoc = 5;
    this.emoticCuina = 5;
    this.emoticBany = 5;
    this.emoticDorm = 5;
    this.lastDate = "";
}

StorageGame=new function() {

    this.hashVar = "BIRIBIRI_";

    this.setBiris = function(UID){

        var list = this.getItem( "list_biris" );
        if( list == null || list == undefined || list == "")
        {
            this.setItem("list_biris",UID+",");
        }
        else
        {
            var alist = list.split(",");
            var trobat= false;
            for(var biri in alist)
            {
                if( UID == alist[biri] ){ trobat= true; }
            }
            if(!trobat)  list = UID+","+list;
            this.setItem("list_biris",list);
        }
    }

    this.getBiris = function() {
        var punts=this.getItem("list_biris");
        return punts;
    }

    this.setDate = function(value,UID) {

        this.setItem("date_"+UID,value);
    }

    this.getDate = function(UID) {
        var punts=this.getItem("date_"+UID);
        return punts;
    }

    this.setBrut = function(value,UID) {

        this.setItem("brut_"+UID,value);
    }

    this.getBrut = function(UID) {
        var punts=this.getItem("brut_"+UID);
        return punts;
    }

    this.getPunts = function(UID) {
        var punts=this.getItem("punts_"+UID);
        return punts;
    }

    this.setPunts = function(value,UID) {

        this.setItem("punts_"+UID,value);
    }

    this.getNom = function(UID) {
        var nom=this.getItem(UID);
        return nom;
    }

    this.setNom = function(value,UID) {

        this.setItem(UID,value);
    }
    this.getNom = function(UID) {
        var nom=this.getItem(UID);
        return nom;
    }
    this.deleteItem = function (UID)
    {
        localStorage.removeItem(this.hashVar+UID);
        localStorage.removeItem(this.hashVar+"joc_"+UID);
        localStorage.removeItem(this.hashVar+"menja_"+UID);
        localStorage.removeItem(this.hashVar+"dorm_"+UID);
        localStorage.removeItem(this.hashVar+"dutxa_"+UID);
        localStorage.removeItem(this.hashVar+"brut_"+UID);
        localStorage.removeItem(this.hashVar+"punts_"+UID);
        localStorage.removeItem(this.hashVar+"date_"+UID);

        var list = this.getItem( "list_biris" );

        var alist = list.split(",");
        var newList="";
        for(var biri in alist)
        {
            if( UID != alist[biri] && alist[biri] != "" ){ newList += alist[biri]+"," }
        }

        this.setItem("list_biris",newList);
    }
    this.setJoc = function(value,UID) {

        this.setItem("joc_"+UID,value);
    }
    this.getJoc = function(UID) {
        var nom=this.getItem("joc_"+UID);
        return nom;
    }

    this.setMenja = function(value,UID) {

        this.setItem("menja_"+UID,value);
    }
    this.getMenja = function(UID) {
        var nom=this.getItem("menja_"+UID);
        return nom;
    }

    this.setDutxa = function(value,UID) {

        this.setItem("dutxa_"+UID,value);
    }
    this.getDutxa = function(UID) {
        var nom=this.getItem("dutxa_"+UID);
        return nom;
    }

    this.setDorm = function(value,UID) {

        this.setItem("dorm_"+UID,value);
    }
    this.getDorm = function(UID) {
        var nom=this.getItem("dorm_"+UID);
        return nom;
    }
    this.setAttribute = function(attributeName, attributeValue) {
        // Save this attributeName and attributeValue
        this.setItem(attributeName,attributeValue);
        return this;
    }

    this.getAttribute = function(attributeName) {
        // Save this attributeName and attributeValue
        var result = this.getItem(attributeName);
        return result;
    }
    // Private methods
    this.getItem = function(attributeName) {
        // We add a hash before the attribute name to isolate from other apps
        return localStorage.getItem(this.hashVar+attributeName);
    }
    this.setItem = function(attributeName, attributeValue) {
        // We add a hash before the attribute name to isolate from other apps
        localStorage.setItem(this.hashVar+attributeName, attributeValue);
    }

    this.deleteStorage = function() {
        // Checking if version of storage is ok

        InfoGame.punts = 0;
        localStorage.clear();
    }
}