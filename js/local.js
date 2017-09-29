var Local = function() {
	// game document...
	var game;
	// 
	var INTERVAL = 300;
	// 
	var timer = null;
	// 绑定键盘事件
	var bindKeyEvent = function() {
		document.onkeydown = function(e) {
			if(e.keyCode == 38){ // up
				game.rotate();
			} else if(e.keyCode == 39) { // right
				game.right();
			} else if(e.keyCode == 40) { // down
				game.down();
			} else if(e.keyCode == 37) { // left
				game.left();
			} else if(e.keyCode == 32) { // space
				game.fall();
			}
		}
	}
	// stay square move 
	var move = function() {
		if(!game.down()){
			game.fixed();
			game.checkClear();
			game.performNext(game.generateType(), game.generateDir());
		}
	}
	// begin
	var start = function() {
		var doms = {
			gameDiv: document.getElementById('game'),
			nextDiv: document.getElementById('next')
		}
		game = new Game();
		game.init(doms);
		timer = setInterval(move, INTERVAL);
		bindKeyEvent();
	}
	// 导出API
	this.start = start;
}