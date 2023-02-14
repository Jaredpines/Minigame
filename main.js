const gameEngine = new GameEngine();
this.bar = new Bar(gameEngine)
const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./res/backgroundM.png")
ASSET_MANAGER.queueDownload("./res/playerM.png")
ASSET_MANAGER.queueDownload("./res/barD.png")
ASSET_MANAGER.queueDownload("./res/barL.png")
ASSET_MANAGER.queueDownload("./res/barR.png")
ASSET_MANAGER.queueDownload("./res/barU.png")
ASSET_MANAGER.queueDownload("./music/Try-This-Just-Shapes-Beats.ogg")
ASSET_MANAGER.queueDownload("./music/Corruption.ogg")
ASSET_MANAGER.queueDownload("./music/Into-Asgard.ogg")
ASSET_MANAGER.queueDownload("./music/The-Crypt.ogg")
ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	
	gameEngine.addEntity(this.bar)
	gameEngine.addEntity(new Player(gameEngine,this.bar))
	gameEngine.addEntity(new Background())
	gameEngine.init(ctx);

	gameEngine.start();
});
