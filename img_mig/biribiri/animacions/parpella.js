(function(window) {
perpelleig = function() {
	this.initialize();
}
perpelleig._SpriteSheet = new SpriteSheet({images: ["parpella.png"], frames: [[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[0,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[396,0,396,490,0,198,245],[792,0,0,0,0,0,0]]});
var perpelleig_p = perpelleig.prototype = new BitmapAnimation();
perpelleig_p.BitmapAnimation_initialize = perpelleig_p.initialize;
perpelleig_p.initialize = function() {
	this.BitmapAnimation_initialize(perpelleig._SpriteSheet);
	this.paused = false;
}
window.perpelleig = perpelleig;
}(window));

