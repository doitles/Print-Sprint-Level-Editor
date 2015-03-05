use2D = true;

var seed = [];
///////////////////||vLOAD LEVEL HEREv||////////////////////////////////////
var useseed = true;  //Use seed?
var seednum = 0;     //Which level to load?
//Input levels below
seed[0] = "empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall wall wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall empty empty empty empty empty wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall empty empty empty start empty wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall empty empty empty empty empty empty wall wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall empty empty empty empty wall wall wall wall wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall empty empty empty empty empty empty empty empty empty wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall empty empty empty empty empty empty empty empty empty empty wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall wall wall wall wall wall empty empty empty empty wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall empty empty empty empty wall wall empty empty empty empty wall wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall empty empty empty empty empty empty wall empty empty empty empty wall wall wall wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall empty empty empty empty empty empty empty wall empty empty empty empty wall wall wall wall wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty wall empty empty empty wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall empty empty empty empty wall wall empty empty empty empty empty empty empty wall wall empty empty empty empty empty wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall empty empty empty empty empty wall wall ink empty ink empty ink wall wall empty empty empty end empty empty wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall empty empty empty empty empty wall wall wall wall wall wall wall empty empty empty empty empty empty empty wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty laserup empty empty wall wall wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall wall wall wall wall wall wall wall wall wall wall wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall wall wall wall wall wall wall wall wall wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty wall wall wall wall wall wall wall wall wall wall wall wall wall wall wall empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty";
seed[1] = "";
///////////////////||^LOAD LEVEL HERE^||////////////////////////////////////
var selection = new Sprite();
get_blob = function() {
	return view.Blob;
};
var canwidth = 1888;
var canheight = 928;

var elements = new Array();
var inPlay = new Array();

var selected = "wall";

//include your sprites here
function LoadContent() {
	var outputtext = new TextBox();
	outputtext.x = canwidth / 2;
	outputtext.y = canheight - 32 * 2;
	outputtext.fontSize = 32;
	outputtext.text = "Output!";
	world.addChild(outputtext);

	var background = new Sprite();
	background.width = canwidth;
	background.height = canheight;
	background.x = 0;
	background.y = 0;
	background.image = Textures.load("http://i.imgur.com/ALUQr26.png");
	background.name = "background";
	background.index = 300;

	var start = new Sprite();
	start.width = 32;
	start.height = 32;
	start.x = canwidth - 32;
	start.y = 32 * 0;
	start.image = Textures.load("http://i.imgur.com/dLVe8sk.png");
	start.name = "start";


	var end = new Sprite();
	end.width = 32;
	end.height = 32;
	end.x = canwidth - 32;
	end.y = 32 * 1;
	end.image = Textures.load("http://i.imgur.com/pIllwaG.png");
	end.name = "end";

	var enemy = new Sprite();
	enemy.width = 32;
	enemy.height = 32;
	enemy.x = canwidth - 32;
	enemy.y = 32 * 2;
	enemy.image = Textures.load("http://i.imgur.com/uwr6ghp.png");
	enemy.name = "enemy";

	var wall = new Sprite();
	wall.width = 32;
	wall.height = 32;
	wall.x = canwidth - 32;
	wall.y = 32 * 3;
	wall.image = Textures.load("http://i.imgur.com/OYNQ3zP.png");
	wall.name = "wall";
	
		
	selection.width = 32;
	selection.height = 32;
	selection.x = wall.x;
	selection.y = wall.y;
	selection.image =  3;
	selection.image = Textures.load("http://i.imgur.com/ezvMRmu.png");
	selection.name = "selection";
	selection.index = -1;

	var pit = new Sprite();
	pit.width = 32;
	pit.height = 32;
	pit.x = canwidth - 32;
	pit.y = 32 * 4;
	pit.image = Textures.load("http://i.imgur.com/A93OdiW.png");
	pit.name = "pit";

	var ink = new Sprite();
	ink.width = 32;
	ink.height = 32;
	ink.x = canwidth - 32;
	ink.y = 32 * 5;
	ink.image = Textures.load("http://i.imgur.com/8nu5AKH.png");
	ink.name = "ink";
	
	var unbreakble = new Sprite();
	unbreakble.width = 32;
	unbreakble.height = 32;
	unbreakble.x = canwidth - 32;
	unbreakble.y = 32 * 6;
	unbreakble.image = Textures.load("http://i.imgur.com/yhmlxDR.png");
	unbreakble.name = "unbreakble";
	
	var laserup = new Sprite();
	laserup.width = 32;
	laserup.height = 32;
	laserup.x = canwidth - 32;
	laserup.y = 32 * 7;
	laserup.image = Textures.load("http://i.imgur.com/v2ZyHGy.png");
	laserup.name = "laserup";
	
	var laserright = new Sprite();
	laserright.width = 32;
	laserright.height = 32;
	laserright.x = canwidth - 32;
	laserright.y = 32 * 8;
	laserright.image = Textures.load("http://i.imgur.com/b4CoxYp.png");
	laserright.name = "laserright";
	
	var laserdown = new Sprite();
	laserdown.width = 32;
	laserdown.height = 32;
	laserdown.x = canwidth - 32;
	laserdown.y = 32 * 9;
	laserdown.image = Textures.load("http://i.imgur.com/AiostRW.png");
	laserdown.name = "laserdown";
	
	var laserleft = new Sprite();
	laserleft.width = 32;
	laserleft.height = 32;
	laserleft.x = canwidth - 32;
	laserleft.y = 32 * 10;
	laserleft.image = Textures.load("http://i.imgur.com/7MiVxvM.png");
	laserleft.name = "laserleft";

	elements.push(start);
	elements.push(end);
	elements.push(enemy);
	elements.push(wall);
	elements.push(pit);
	elements.push(ink);
	elements.push(laserup);
	elements.push(laserright);
	elements.push(laserdown);
	elements.push(laserleft);
	elements.push(unbreakble);

	world.addChild(background);
	world.addChild(start);
	world.addChild(end);
	world.addChild(enemy);
	world.addChild(wall);
	world.addChild(pit);
	world.addChild(ink);
	world.addChild(unbreakble);
	world.addChild(laserup);
	world.addChild(laserright);
	world.addChild(laserdown);
	world.addChild(laserleft);
	world.addChild(selection);
}

LoadContent();


function checkSprite(sprite, x, y) {
	var minX = sprite.x;
	var maxX = sprite.x + sprite.width;
	var minY = sprite.y;
	var maxY = sprite.y + sprite.height;
	var mx = x;
	var my = y;

	if (mx >= minX && mx <= maxX && my >= minY && my <= maxY) {
		return true;
	}
	return false;
}

function createCopy(oldSprite) {
	var newSprite = new Sprite();
	newSprite.width = oldSprite.width;
	newSprite.height = oldSprite.height;
	newSprite.x = oldSprite.x;
	newSprite.y = oldSprite.y;
	newSprite.image = oldSprite.image;
	newSprite.name = oldSprite.name;
	return newSprite;
}

function removeSprite(sprite) {
	world.removeChild(sprite);
	for ( i = 0; i < inPlay.length; i++) {
		var searchedsprite = inPlay[i];
		if (searchedsprite == sprite) {
			inPlay.splice(i, 1);
		}
	}
	for ( i = 0; i < sprites.length; i++) {
		var searchedsprite = sprites[i];
		if (searchedsprite == sprite) {
			sprites.splice(i, 1);
		}
	}
}

// We will add all sprites we want to be able to drag into this array.
var sprites = new Array();
for ( i = 0; i < elements.length; i++) {
	sprites[i] = elements[i];
}

// Create a sprite to manage dragging the other sprites.
var manager = new Sprite();
manager.dragging = false;
manager.target = undefined;
manager.dragOffsetX = 0;
manager.dragOffsetY = 0;

// Make sure to add it to the world.
world.addChild(manager);

// Notify manager anytime the mouse is down.
// (We "listen" for a mouse down to happen)
gInput.addMouseDownListener(manager);

// Notify manager anytime the mouse is up.
//gInput.addMouseUpListener(manager);

// When the mouse is down...
manager.onMouseDown = function(button) {

	//If mouse is over output, output.
	if (gInput.mouse.y >= canheight - 32 * 3) {

		//initialize empty grid array
		var grid = new Array;
		for (var i = 0; i < canheight / 32 - 3; i++) {
			grid[i] = new Array;
			for (var j = 0; j < canwidth / 32 - 2; j++) {
				grid[i][j] = "empty";
			}
		}

		//fill grid array with data
		for (var i = 0; i < inPlay.length; i++) {
			grid[inPlay[i].y/32][inPlay[i].x / 32] = inPlay[i].name;
		}

		var output = "";
		//pack it into string
		for (var i = 0; i < grid.length; i++) {
			for (var j = 0; j < grid[i].length; j++) {
				if (i == 0 && j == 0)
					output += grid[i][j];
				else
					output += " " + grid[i][j];
			}
		}

		//print output to console;

		var blob = new Blob([output], {
			type : "text/plain;charset=utf-8"
		});
		saveAs(blob, "LevelEditorOutput.txt");

		console.log(output);

	} else if (gInput.mouse.x >= canwidth - 32 * 2) {
		// For each draggable sprite...		
		for (var sprite in elements) {
			sprite = elements[sprite];
			if (checkSprite(sprite, gInput.mouse.x, gInput.mouse.y)) {
				selected = sprite.name;
				selection.y = sprite.y;					
			}
		}
	} else{
		var removed = false;
		for (var sprite in inPlay) {
			sprite = inPlay[sprite];
			if (checkSprite(sprite, gInput.mouse.x, gInput.mouse.y)) {
				removeSprite(sprite);
				removed = true;
			}
		}
		if (!removed) for (var sprite in elements) {
			sprite = elements[sprite];
			if (sprite.name == selected) {
				var duplicated = createCopy(sprite);
				world.addChild(duplicated);
				inPlay.push(duplicated);
				var gridx = gInput.mouse.x - (gInput.mouse.x % 32);
				var gridy = gInput.mouse.y - (gInput.mouse.y % 32);
				duplicated.x = gridx;
				duplicated.y = gridy;
			}
		}
	}
};
if (useseed) loadLevel(seednum);
function loadLevel(num) {
	var strlist = seed[num].split(" ");
	var levelArray = new Array;
	var stritr = 0;
	for (var i = 0; i < canheight / 32 - 3; i++) {
		levelArray[i] = new Array;
		for (var j = 0; j < canwidth / 32 - 2; j++) {
			if (stritr >= strlist.length)
				levelArray[i][j] = "empty";
			else
				levelArray[i][j] = strlist[stritr];
			stritr++;
		}
	}
	for (var i = 0; i < levelArray.length; i++) {
		for (var j = 0; j < levelArray[i].length; j++) {
			placeObj(j * 32, i * 32, levelArray[i][j]);
		}
	}
};
function placeObj(x, y, objName) {
	if (objName == "empty") {
		console.log("heh");
	} else {
		var obj = new Sprite();
		obj.x = x - (x % 32);
		obj.y = y - (y % 32);
		obj.width = 32;
		obj.height = 32;
		snapToClosestBlock(obj);
		inPlay.push(obj);
		switch(objName) {
		case "wall":
			obj.image = Textures.load("http://i.imgur.com/OYNQ3zP.png");
			obj.name = "wall";
			world.addChild(obj);
			break;
		case "laserup":
			obj.image = Textures.load("http://i.imgur.com/v2ZyHGy.png");
			obj.name = "laserup";
			world.addChild(obj);
			break;
		case "laserright":
			obj.image = Textures.load("http://i.imgur.com/b4CoxYp.png");
			obj.name = "laserright";
			world.addChild(obj);
			break;
		case "laserdown":
			obj.image = Textures.load("http://i.imgur.com/AiostRW.png");
			obj.name = "laserdowns";
			world.addChild(obj);
			break;
		case "laserleft":
			obj.image = Textures.load("http://i.imgur.com/7MiVxvM.png");
			obj.name = "laserleft";
			world.addChild(obj);
			break;
		case "pit":
			obj.image = Textures.load("http://i.imgur.com/A93OdiW.png");
			obj.name = "pit";
			world.addChild(obj);
			break;
		case "enemy":
			obj.image = Textures.load("http://i.imgur.com/uwr6ghp.png");
			obj.name = "enemy";
			world.addChild(obj);
			break;
		case "ink":
			obj.image = Textures.load("http://i.imgur.com/8nu5AKH.png");
			obj.name = "ink";
			world.addChild(obj);
			break;
		case "start":
			obj.image = Textures.load("http://i.imgur.com/dLVe8sk.png");
			obj.name = "start";
			world.addChild(obj);
			break;
		case "end":
			obj.image = Textures.load("http://i.imgur.com/pIllwaG.png");
			obj.name = "end";
			world.addChild(obj);
			break;
		default:
			
			break;
		}
	}
}
function snapToClosestBlock(obj) {
	if (obj.x % 32 > 16) {
		obj.x += 32 - (obj.x % 32);
	} else {
		obj.x -= obj.x % 32;
	}
	if (obj.y % 32 > 16) {
		obj.y += 32 - (obj.y % 32);
	} else {
		obj.y -= obj.y % 32;
	}
}


initGame("canvas"); 
