(function(window) {
titella = function() {
	this.initialize();
}
titella._SpriteSheet = new SpriteSheet({images: ["titella.png"], frames: [[0,0,396,590,0,198,245],[0,0,396,590,0,198,245],[0,0,396,590,0,198,245],[0,0,396,590,0,198,245],[0,0,396,590,0,198,245],[0,0,396,590,0,198,245],[0,0,396,590,0,198,245],[0,0,396,590,0,198,245],[0,0,396,590,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[1188,0,396,490,0,198,245]]});
var titella_p = titella.prototype = new BitmapAnimation();
titella_p.BitmapAnimation_initialize = titella_p.initialize;
titella_p.initialize = function() {
	this.BitmapAnimation_initialize(titella._SpriteSheet);
	this.paused = false;
}
window.titella = titella;
}(window));

