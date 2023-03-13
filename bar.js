class Bar {
    constructor(game){
        this.game = game;
        this.maxW = 997;
        this.maxH = 261;
        this.maxX = 0;
        this.maxY = 736;
        this.startD = false;
        this.startL = false;
        this.startR = false;
        this.startU = false;
        this.startDW = 160;
        this.startDH = 65.25;
        this.startDX = 419;
        this.startDY = 513;
        this.startUW = 160;
        this.startUH = 65.25;
        this.startUX = 419;
        this.startUY = 418;
        this.startLW = 65.25;
        this.startLH = 160;
        this.startLX = 419;
        this.startLY = 418;
        this.startRW = 65.25;
        this.startRH = 160;
        this.startRX = 513;
        this.startRY = 419;
        this.timerD = 0;
        this.timerR = 0;
        this.timerL = 0;
        this.timerU = 0;
        this.difficulty = 100;
        this.boundingBoxD = new BoundingBox(this.startDX,this.startDY+this.startDH/2,this.startDW,this.startDH/2)
        this.boundingBoxU = new BoundingBox(this.startUX,this.startUY,this.startUW,this.startUH/2)
        this.boundingBoxL = new BoundingBox(this.startLX-this.startLW/2,this.startLY,this.startLW/2,this.startLH)
        this.boundingBoxR = new BoundingBox(this.startRX + this.startRW/2,this.startRY,this.startRW/2,this.startRH);
        this.r = 0
    };


    update(){
        if(this.r != -1){
            this.r = Math.floor(Math.random() * this.difficulty);
        }
        if(this.startD){
            this.startDW += 1000*this.game.clockTick/(this.difficulty/30);
            this.startDH += 250*this.game.clockTick/(this.difficulty/30);
            this.startDX -= 500*this.game.clockTick/(this.difficulty/30);
            this.startDY += 250*this.game.clockTick/(this.difficulty/30);
        }
        if(this.timerD >= Math.floor(Math.random()*100)+100&&this.r==0&&this.startDY>1200){
            this.startDW = 160;
            this.startDH = 65.25;
            this.startDX = 419;
            this.startDY = 513;
            this.timerD = 0
            this.startD = true;
        }
        if(this.startU){
            this.startUW += 1000*this.game.clockTick/(this.difficulty/30);
            this.startUH += 250*this.game.clockTick/(this.difficulty/30);
            this.startUX -= 500*this.game.clockTick/(this.difficulty/30);
            this.startUY -= 500*this.game.clockTick/(this.difficulty/30);
        }
        if(this.timerU >= Math.floor(Math.random()*100)+100&&this.r==1&&this.startUY<-500){
            this.startUW = 160;
            this.startUH = 65.25;
            this.startUX = 419;
            this.startUY = 418;
            this.timerU = 0
            this.startU = true;
        }
        if(this.startL){
            this.startLW += 250*this.game.clockTick/(this.difficulty/30);
            this.startLH += 1000*this.game.clockTick/(this.difficulty/30);
            this.startLX -= 500*this.game.clockTick/(this.difficulty/30);
            this.startLY -= 500*this.game.clockTick/(this.difficulty/30);
        }
        if(this.timerL >= Math.floor(Math.random()*100)+100&&this.r==2&&this.startLX<-500){
            this.startLW = 65.25;
            this.startLH = 160;
            this.startLX = 419;
            this.startLY = 418;
            this.timerL = 0
            this.startL = true;
        }
        if(this.startR){
            this.startRW += 250*this.game.clockTick/(this.difficulty/30);
            this.startRH += 1000*this.game.clockTick/(this.difficulty/30);
            this.startRX += 250*this.game.clockTick/(this.difficulty/30);
            this.startRY -= 500*this.game.clockTick/(this.difficulty/30);
        }
        if(this.timerR >= Math.floor(Math.random()*100)+100&&this.r==3&&this.startRX>1200){
            this.startRW = 65.25;
            this.startRH = 160;
            this.startRX = 513;
            this.startRY = 419;
            this.timerR = 0
            this.startR = true;
        }
        this.boundingBoxD = new BoundingBox(this.startDX,this.startDY+this.startDH/2,this.startDW,this.startDH/2)
        this.boundingBoxU = new BoundingBox(this.startUX,this.startUY,this.startUW,this.startUH/2)
        this.boundingBoxL = new BoundingBox(this.startLX-this.startLW/2,this.startLY,this.startLW/2,this.startLH)
        this.boundingBoxR = new BoundingBox(this.startRX + this.startRW/2,this.startRY,this.startRW/2,this.startRH);
        this.timerD +=  Math.floor(Math.random()*100-this.difficulty/3)*this.game.clockTick;
        this.timerR += Math.floor(Math.random()*100-this.difficulty/3)*this.game.clockTick;
        this.timerL += Math.floor(Math.random()*100-this.difficulty/3)*this.game.clockTick;
        this.timerU += Math.floor(Math.random()*100-this.difficulty/3)*this.game.clockTick;
        if(this.difficulty > 4){
            this.difficulty -= 1*this.game.clockTick;
        }
        if(this.difficulty < 4){
            this.difficulty = 4;
        }
        //console.log(this.difficulty)
        //console.log(this.r)
    };
    
    

    draw(ctx){
        //Start size
        //ctx.drawImage(ASSET_MANAGER.getAsset("./res/barD.png"),419,513,160,65.25);
        //ctx.strokeRect(this.startDX,this.startDY+this.startDH/2,this.startDW,this.startDH/2);
        //ctx.strokeRect(this.startUX,this.startUY,this.startUW,this.startUH/2);
        //ctx.strokeRect(this.startLX,this.startLY,this.startLW/2,this.startLH);
        //ctx.strokeRect(this.startRX + this.startRW/2,this.startRY,this.startRW/2,this.startRH);
        if(this.startD){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/barD.png"),this.startDX,this.startDY,this.startDW,this.startDH);
        }
        if(this.startL){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/barL.png"),this.startLX,this.startLY,this.startLW,this.startLH);
        }
        if(this.startR){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/barR.png"),this.startRX,this.startRY,this.startRW,this.startRH);
        }
        if(this.startU){
            ctx.drawImage(ASSET_MANAGER.getAsset("./res/barU.png"),this.startUX,this.startUY,this.startUW,this.startUH);
        }
        
        
        
        
        
        
        
        
    };
}