class Bar {
    constructor(game){
        this.game = game;
        this.maxW = 997;
        this.maxH = 261;
        this.maxX = 0;
        this.maxY = 736;
        this.startDW = 160;
        this.startDH = 65.25;
        this.startDX = 419;
        this.startDY = 513;
        this.timer = 0;
        this.boundingBox = new BoundingBox(this.startDX,this.startDY+(this.startDH/2),this.startDW,this.startDH/2);
        this.r = 0
    };


    update(){
        if(this.r != -1){
            this.r = Math.floor(Math.random() * 100);
        }
        this.startDW += 1000*this.game.clockTick;
        this.startDH += 250*this.game.clockTick;
        this.startDX -= 500*this.game.clockTick;
        this.startDY += 250*this.game.clockTick;
        if(this.timer >= 100&&this.r==4){
            this.startDW = 160;
            this.startDH = 65.25;
            this.startDX = 419;
            this.startDY = 513;
            this.timer = 0
        }
        this.boundingBox = new BoundingBox(this.startDX,this.startDY+((this.startDH/2)+100),this.startDW,(this.startDH/2)-100)
        this.timer += 50*this.game.clockTick;
        
    };
    
    

    draw(ctx){
        //Start size
        //ctx.drawImage(ASSET_MANAGER.getAsset("./res/barD.png"),419,513,160,65.25);
        ctx.drawImage(ASSET_MANAGER.getAsset("./res/barD.png"),this.startDX,this.startDY,this.startDW,this.startDH);
        
        
        
        
        
        
        
    };
}