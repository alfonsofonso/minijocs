
/*
var stage;
var Mouse= {x:0,y:0};
var RESOLUTION =2;
var OFFSET_ULLS= 30/ RESOLUTION;
*/

Popup = new function() {
    
    this.windowResize = function () {
		/*
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
		*/
    }
}
window.addEventListener('resize', Popup.windowResize, false);
