class Player {
    constructor(game,bar){
        this.game = game;
        this.height = document.getElementById('gameWorld').height
        this.width = document.getElementById('gameWorld').width
        this.down = true;
        this.up = false;
        this.left = false;
        this.right = false;
        this.boundingBox = new BoundingBox((this.width/2)-(315/2),715+(315/2),315,315/2);;
        this.bar = bar
        this.dead = false;
    };


    update(){
        
        if(this.game.keys.ArrowDown){
            this.down = true;
            this.up = false;
            this.left = false;
            this.right = false;
        }else if(this.game.keys.ArrowUp){
            this.down = false;
            this.up = true;
            this.left = false;
            this.right = false;
        }else if(this.game.keys.ArrowLeft){
            this.down = false;
            this.up = false;
            this.left = true;
            this.right = false;
        }else if(this.game.keys.ArrowRight){
            this.down = false;
            this.up = false;
            this.left = false;
            this.right = true;
        }
        if(this.boundingBox.collide(this.bar.boundingBox)){
            this.down = false;
            this.up = false;
            this.left = false;
            this.right = false;
            this.dead = true;
        }
    };


    draw(ctx){
        if(this.dead == false){
            if(this.down){
                this.boundingBox = new BoundingBox((this.width/2)-(315/2),715+(315/2),315,315/2);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/playerM.png"),(this.width/2)-(315/2),715,315,315);
            }else if(this.up){
                this.boundingBox = new BoundingBox((this.width/2)-(315/2),-20,315,315/2);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/playerM.png"),(this.width/2)-(315/2),-20,315,315);
            }else if(this.left){
                this.boundingBox = new BoundingBox(-20,(this.height/2)-(315/2),315,315/2);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/playerM.png"),-20,(this.height/2)-(315/2),315,315);
            }else if(this.right){
                this.boundingBox = new BoundingBox(705+315/2,(this.height/2)-(315/2),315,315/2);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/playerM.png"),705,(this.height/2)-(315/2),315,315);
            }
        }else{
            if(this.game.keys.Enter){
                this.dead = false;
                this.down = true;
                this.bar.startDW = 160;
                this.bar.startDH = 65.25;
                this.bar.startDX = 419;
                this.bar.startDY = 513;
                this.bar.timer = 0;
                this.bar.r = 0;
                this.bar.boundingBox = new BoundingBox(this.startDX,this.startDY+(this.startDH/2),this.startDW,this.startDH/2);
            }else{
                this.bar.r = -1;
            }
        
            ctx.font = '250px Calibri';
            ctx.fontSize = "100pt";
            ctx.fillStyle = "White";
            ctx.fillText("You Died", this.width/2-450, this.height/2);
            ctx.font = '100px Calibri';
            ctx.fillText("press enter to restart", this.width/2-450, this.height/2+100);
        }
        
        
        
        
        
    };
}