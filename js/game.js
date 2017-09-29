var Game = function() {
	// dom 元素
	var gameDiv;
	var nextDiv;
	// 游戏矩阵
	var gameData = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	];
	// 当前方块
	var cur;
	// 下一个方块
	var next;
	// fall v
	var fallV = 0;
	// divs
	var gameDivs = [];
	var nextDivs = [];
	// init Div
	var initDiv = function(container, data, divs) {
		for (var i = 0; i < data.length; i++) {
			var div = [];
			for (var j = 0; j<data[0].length; j++) {
				var newNode = document.createElement('div');
				newNode.className = 'none';
				newNode.style.top = (i*20) + 'px';
				newNode.style.left = (j*20) + 'px';
				container.appendChild(newNode);
				div.push(newNode);
			}
			divs.push(div);
		}
	}
	// fresh div
	var refreshDiv = function(data, divs){
		for (var i = 0; i < data.length; i++) {
			for (var j = 0; j < data[i].length; j++) {
				if(data[i][j]==0){
					divs[i][j].className = 'none';
				}else if (data[i][j]==1) {
					divs[i][j].className = 'done';
				}else if (data[i][j]==2){
					divs[i][j].className = 'current';
				}
			}
		}
	}
	// 检查数据
	var check = function(pos, x, y) {
		if(pos.x + x < 0){
			return false;
		}else if(pos.x + x >= gameData.length){
			return false;
		}else if(pos.y + y < 0){
			return false;
		}else if(pos.y + y >= gameData[0].length){
			return false;
		}else if(gameData[pos.x + x][pos.y + y] == 1){
			return false;
		}else{
			return true;
		}
	}
	// 检测数据
	var isValid = function(pos, data) {
		for (var i = 0; i < data.length; i++) {
			for (var j = 0; j < data[0].length; j++) {
				if(data[i][j] !=0){
					if(!check(pos, i, j)){
						return false;
					}
				}
			}
		}
		return true;
	}
	// 清除数据
	var clearData = function() {
		for (var i = 0; i < cur.data.length; i++) {
			for (var j = 0; j < cur.data[0].length; j++) {
				if(check(cur.origin, i, j)){
					gameData[cur.origin.x + i][cur.origin.y + j] = 0;
				}
			}
		}
	}
	// 设置数据
	var setData = function() {
		for (var i = 0; i < cur.data.length; i++) {
			for (var j = 0; j < cur.data[0].length; j++) {
				if(check(cur.origin, i, j)){
					gameData[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j];
				}
			}
		}
	}
	// 清除低行
	var fixed = function() {
		for (var i = 0; i < cur.data.length; i++) {
			for (var j = 0; j < cur.data[0].length; j++) {
				if(check(cur.origin, i, j)){
					if(gameData[cur.origin.x + i][cur.origin.y + j]==2){
						gameData[cur.origin.x + i][cur.origin.y + j] = 1;
					}
				}
			}
		}
		refreshDiv(gameData, gameDivs);
	}
	// clear line
	var checkClear = function() {
		var clear = true;
		for(var i=gameData.length - 1; i>0; i--){
			var clear = true;
			for (var j = 0; j < gameData[0].length; j++) {
				if(gameData[i][j] != 1){
					clear = false;
					break;
				}
			}
			if(clear){
				for (var m = i; m>0 ; m--) {
					for (var n = 0; n < gameData[0].length; n++) {
						gameData[m][n] = gameData[m-1][n];
					}
				}
				for (n = 0; n < gameData[0].length; n++) {
					gameData[0][n] = 0;
				}
				i += 1;
			}
		}
	}
	// get the next square
	var performNext = function(type, dir) {
		cur = next;
		setData();
		next = SquareFactory.prototype.make(type, dir);
		refreshDiv(next.data, nextDivs);
		refreshDiv(gameData, gameDivs);
	}
	// rotate square
	var rotate = function() {
		if(cur.canRotate(isValid)){
			clearData();
			cur.rotate();
			setData();
			refreshDiv(gameData, gameDivs);
		}
	}
	// left
	var left = function() {
		if(cur.canLeft(isValid)){
			clearData();
			cur.left();
			setData();
			refreshDiv(gameData, gameDivs);
		}
	}
	// right
	var right = function() {
		if(cur.canRight(isValid)){
			clearData();
			cur.right();
			setData();
			refreshDiv(gameData, gameDivs);
		}
	}
	// down
	var down = function() {
		if(cur.canDown(isValid)){
			clearData();
			cur.down();
			setData();
			refreshDiv(gameData, gameDivs);
			return true;
		}else{	return false;}
	}
	// fall
	var fall = function() {
		while(cur.canDown(isValid)){
			clearData();
			cur.down();
			setData();
			refreshDiv(gameData, gameDivs);
		}
	}
	// get the rand square
	var generateType = function() {
		return Math.ceil(Math.random() * 7) - 1;
	}
	// get the rand square's body
	var generateDir = function() {
		return Math.ceil(Math.random() * 4) - 1;
	}
	// init the game
	var init = function(doms) {
		gameDiv = doms.gameDiv;
		nextDiv = doms.nextDiv;
		cur = SquareFactory.prototype.make(generateType(),generateDir());
		next = SquareFactory.prototype.make(generateType(),generateDir());
		initDiv(gameDiv, gameData, gameDivs);
		initDiv(nextDiv, next.data, nextDivs);
		setData();
		refreshDiv(gameData, gameDivs);
		refreshDiv(next.data, nextDivs);
	}
	// 导出API
	this.init = init;
	this.down = down;
	this.right = right;
	this.left = left;
	this.rotate = rotate;
	this.fall = fall;
	this.fixed = fixed;
	this.performNext = performNext;
	this.checkClear = checkClear;
	this.generateType = generateType;
	this.generateDir = generateDir;
}