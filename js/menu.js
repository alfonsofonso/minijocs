/**
alfonsofonso
*/

var fons_menu;
var presentacio;
var bot1;
var bot2;
var bot3;
var bot4;


Menu=new  function() {

    this.initMenu = function ()
    {
        console.log("initMenu",imatges);
       // Xilofon.initMenu();


        Menu.startMenu();
        Menu.benvinguda();
    };

    this.benvinguda = function()
    {
        Menu.posaBotons();
        //  stage.update();
        $("#background").css('background-color','black');
    };


    this.startMenu = function()
    {
        // Menu.createFons();

        stage.removeChild(percent);
        Main.windowResize();
        $("#background").css('background-color','#0FB800');
        $("#mainCanvas").css('background-color','#3F3830');
        stage.update();

    };

    this.posaBotons=function(){

        var rati=.5;

        bot1=new createjs.Bitmap(imatges['bot1']);
        Utils.pon(bot1,amp/4,alt/4,true,rati);
        bot1.addEventListener("mousedown",Menu.juga);

        bot2=new createjs.Bitmap(imatges['bot1']);
       Utils.pon(bot2,(amp/4),alt*(3/4),true,rati);
        bot1.addEventListener("mousedown",Menu.juga);

        bot3=new createjs.Bitmap(imatges['bot1']);
       Utils.pon(bot3,amp*(3/4),alt/4,true,rati);
        bot1.addEventListener("mousedown",Menu.juga);

        bot4=new createjs.Bitmap(imatges['bot1']);
        Utils.pon(bot4,amp*(3/4),alt*(3/4),true,rati);
        bot1.addEventListener("mousedown",Menu.juga);
    };

    this.juga=function(e){

        stage.removeChild(bot1);
        stage.removeChild(bot2);
        stage.removeChild(bot3);
        stage.removeChild(bot4);

      if(e.target==bot1){
          Joc1.init();
      }else if(e.target==bot2){

      }else if(e.target==bot3){

      }else{

      }

    };

    this.handlerFora = function()
    {
        history.back();
    };

    this.handlerTorna = function()
    {
        stage.removeAllChildren();
        Menu.benvinguda();
    };


    this.handlerLogar = function()
    {

        $('#mainCanvas').css('opacity', '0');

        var popup = $('.hidden .popup-registrat').clone();
        $('.canvasHolder .popup').remove();
        $('.canvasHolder .innerWrapper').append(popup);
        $('.canvasHolder .popup-registrat').fadeIn(200);

        //$('#error_login').hide();
        // $('#login').click();
    };

};