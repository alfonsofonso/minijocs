(function(window) {
pessigolles = function() {
	this.initialize();
}
pessigolles._SpriteSheet = new SpriteSheet({images: ["pessigolles.png"], frames: [[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[792,0,396,490,0,198,245],[1188,0,396,490,0,198,245],[1188,0,396,490,0,198,245],[1188,0,396,490,0,198,245],[1188,0,396,490,0,198,245],[1188,0,396,490,0,198,245],[1188,0,396,490,0,198,245],[1188,0,396,490,0,198,245],[1188,0,396,490,0,198,245],[1188,0,396,490,0,198,245],[1188,0,396,490,0,198,245]]});
var pessigolles_p = pessigolles.prototype = new BitmapAnimation();
pessigolles_p.BitmapAnimation_initialize = pessigolles_p.initialize;
pessigolles_p.initialize = function() {
	this.BitmapAnimation_initialize(pessigolles._SpriteSheet);
	this.paused = false;
}
window.pessigolles = pessigolles;
}(window));

