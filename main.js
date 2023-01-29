const gameEngine = new GameEngine();
this.bar = new Bar(gameEngine)
const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./res/backgroundM.png")
ASSET_MANAGER.queueDownload("./res/playerM.png")
ASSET_MANAGER.queueDownload("./res/barD.png")
ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	
	gameEngine.addEntity(this.bar)
	gameEngine.addEntity(new Player(gameEngine,this.bar))
	gameEngine.addEntity(new Background())
	gameEngine.init(ctx);

	gameEngine.start();
});
