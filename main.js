var context = document.getElementById('theCanvas').getContext('2d');
var lastTime;

// Load the necessary images
ResourceManager.onReady = init;
ResourceManager.loadImages([
	'img/grass64.png', 'img/grass64nw.png', 'img/grass64se.png', 'img/grass64s.png', 'img/grass64ne.png', 'img/grass64n.png', 'img/grass64sw.png'
]);

map = new Array(16);
for (var i = 0; i < 16; i++)
	map[i] = new Array(16);

function init()
{
	console.log('Done loading images');

	// Create a world
	for (var i = 0; i < 16; i++)
		for (var j = 0; j < 16; j++)
			map[j][i] = new Tile(context, 0, i, j);
	console.log('World created');

	console.log('Starting main loop');
	mainLoop();
}

function mainLoop()
{
	// Calculate the passed time (dt)
	var now = Date.now();
	var dt = (now - lastTime) / 1000.0;

	// Make the context fullscreen
	context.canvas.width = document.body.clientWidth;
	context.canvas.height = document.body.clientHeight;

	update(dt);
	render();

	lastTime = now;
	window.requestAnimationFrame(mainLoop);
}

function update(dt)
{

}

function render()
{
	for (var i = 0; i < 16; i++)
		for (var j = 0; j < 16; j++)
		{
			map[j][i].draw(512, 0);
		}
}