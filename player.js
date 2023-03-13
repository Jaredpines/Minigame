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
        this.score = 0;
        this.scoreT = 0;
        this.dead = false;
        this.start = false;
        this.c = 0;
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
        if(this.boundingBox.collide(this.bar.boundingBoxD)|| this.boundingBox.collide(this.bar.boundingBoxL)|| this.boundingBox.collide(this.bar.boundingBoxR)|| this.boundingBox.collide(this.bar.boundingBoxU)){
            this.down = false;
            this.up = false;
            this.left = false;
            this.right = false;
            this.dead = true;
        }
        if(this.down&&this.game.keys["a"]&& this.c > 10){
            this.bar.startDW = 160;
            this.bar.startDH = 65.25;
            this.bar.startDX = 419;
            this.bar.startDY = 513;
            this.c = 0
        }else if(this.game.keys["a"]){

        }else{
            this.c += 30*this.game.clockTick
        }
        if(this.left&&this.game.keys["a"]&& this.c > 10){
            this.bar.startLW = 65.25;
            this.bar.startLH = 160;
            this.bar.startLX = 419;
            this.bar.startLY = 418;
            this.c = 0
        }else if(this.game.keys["a"]){

        }else{
            this.c += 30*this.game.clockTick
        }
        if(this.right&&this.game.keys["a"]&& this.c > 10){
            this.bar.startRW = 65.25;
            this.bar.startRH = 160;
            this.bar.startRX = 513;
            this.bar.startRY = 419;
            this.c = 0
        }else if(this.game.keys["a"]){

        }else{
            this.c += 30*this.game.clockTick
        }
        if(this.up&&this.game.keys["a"]&& this.c > 10){
            this.bar.startUW = 160;
            this.bar.startUH = 65.25;
            this.bar.startUX = 419;
            this.bar.startUY = 418;
            this.c = 0
        }else if(this.game.keys["a"]){

        }else{
            this.c += 30*this.game.clockTick
        }

    };


    draw(ctx){
        if(this.dead == false&& this.start == true){
            if(this.down){
                this.boundingBox = new BoundingBox((this.width/2)-(315/4),715+(315/2),315/2,315/2);
                //ctx.strokeRect((this.width/2)-(315/4),715+(315/2),315/2,315/2);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/playerM.png"),(this.width/2)-(315/2),715,315,315);
            }else if(this.up){
                this.boundingBox = new BoundingBox((this.width/2)-(315/4),-20,315/2,315/2);
                //ctx.strokeRect((this.width/2)-(315/4),-20,315/2,315/2);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/playerM.png"),(this.width/2)-(315/2),-20,315,315);
            }else if(this.left){
                this.boundingBox = new BoundingBox(-20,(this.height/2)-(315/4),315/2,315/2);
                //ctx.strokeRect(-20,(this.height/2)-(315/4),315/2,315/2);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/playerM.png"),-20,(this.height/2)-(315/2),315,315);
            }else if(this.right){
                this.boundingBox = new BoundingBox(705+315/2,(this.height/2)-(315/4),315/2,315/2);
                //ctx.strokeRect(705+315/2,(this.height/2)-(315/4),315/2,315/2);
                ctx.drawImage(ASSET_MANAGER.getAsset("./res/playerM.png"),705,(this.height/2)-(315/2),315,315);
            }
            if(this.scoreT > 1){
                this.score += Math.ceil(this.game.clockTick);
                this.scoreT = 0;
            }
            
            this.scoreT += this.game.clockTick;
            ctx.font = '100px Calibri';
            ctx.fontSize = "100pt";
            ctx.fillStyle = "White";
            ctx.fillText("Score:"+this.score, this.width/4, this.height/4);
            ctx.font = '100px Calibri';
        }else if(this.start == false){
            ctx.fontSize = "100pt";
            ctx.fillStyle = "White";
            ctx.font = '100px Calibri';
            ctx.fillText("press enter to start", this.width/2-400, this.height/3);
            this.bar.startD = false;
            this.bar.startL = false;
            this.bar.startR = false;
            this.bar.startU = false;
            if(this.game.keys.Enter){
                this.dead = false;
                this.down = true;
                this.bar.startDW = 160;
                this.bar.startDH = 65.25;
                this.bar.startDX = 419;
                this.bar.startDY = 513;
                this.bar.startUW = 160;
                this.bar.startUH = 65.25;
                this.bar.startUX = 419;
                this.bar.startUY = 418;
                this.bar.startLW = 65.25;
                this.bar.startLH = 160;
                this.bar.startLX = 419;
                this.bar.startLY = 418;
                this.bar.startRW = 65.25;
                this.bar.startRH = 160;
                this.bar.startRX = 513;
                this.bar.startRY = 418;
                this.bar.startD = true;
                this.bar.startL = true;
                this.bar.startR = true;
                this.bar.startU = true;
                this.bar.timerD = 0;
                this.bar.timerU = 0;
                this.bar.timerL = 0;
                this.bar.timerR = 0;
                this.c = 0;
                this.bar.difficulty = 100;
                this.bar.r = 0;
                this.score = 0;
                this.scoreT = 0;
                const songS = Math.floor(Math.random()*4)
                ASSET_MANAGER.pauseBackgroundMusic();
                console.log(songS)
                if(songS == 0){
                    ASSET_MANAGER.playAsset("./music/Try-This-Just-Shapes-Beats.ogg");
                    ASSET_MANAGER.autoRepeat("./music/Try-This-Just-Shapes-Beats.ogg");
                }else if(songS == 1){
                    ASSET_MANAGER.playAsset("./music/The-Crypt.ogg");
                    ASSET_MANAGER.autoRepeat("./music/The-Crypt.ogg");
                }else if(songS == 2){
                    ASSET_MANAGER.playAsset("./music/Into-Asgard.ogg");
                    ASSET_MANAGER.autoRepeat("./music/Into-Asgard.ogg");
                }else if(songS == 3){
                    ASSET_MANAGER.playAsset("./music/Corruption.ogg");
                    ASSET_MANAGER.autoRepeat("./music/Corruption.ogg");
                }
                this.start = true;
            }else{
                this.bar.r = -1;
            }
        }else{
            ASSET_MANAGER.pauseBackgroundMusic();
            if(this.game.keys.Enter){
                this.dead = false;
                this.down = true;
                this.bar.startDW = 160;
                this.bar.startDH = 65.25;
                this.bar.startDX = 419;
                this.bar.startDY = 513;
                this.bar.startUW = 160;
                this.bar.startUH = 65.25;
                this.bar.startUX = 419;
                this.bar.startUY = 418;
                this.bar.startLW = 65.25;
                this.bar.startLH = 160;
                this.bar.startLX = 419;
                this.bar.startLY = 418;
                this.bar.startRW = 65.25;
                this.bar.startRH = 160;
                this.bar.startRX = 513;
                this.bar.startRY = 418;
                this.bar.startD = true;
                this.bar.startL = true;
                this.bar.startR = true;
                this.bar.startU = true;
                this.bar.timerD = 0;
                this.bar.timerU = 0;
                this.bar.timerL = 0;
                this.bar.timerR = 0;
                this.c = 0;
                this.bar.difficulty = 100;
                this.bar.r = 0;
                this.score = 0;
                this.scoreT = 0;
                const songS = Math.floor(Math.random()*4)
                console.log(songS)
                if(songS == 0){
                    ASSET_MANAGER.playAsset("./music/Try-This-Just-Shapes-Beats.ogg");
                    ASSET_MANAGER.autoRepeat("./music/Try-This-Just-Shapes-Beats.ogg");
                }else if(songS == 1){
                    ASSET_MANAGER.playAsset("./music/The-Crypt.ogg");
                    ASSET_MANAGER.autoRepeat("./music/The-Crypt.ogg");
                }else if(songS == 2){
                    ASSET_MANAGER.playAsset("./music/Into-Asgard.ogg");
                    ASSET_MANAGER.autoRepeat("./music/Into-Asgard.ogg");
                }else if(songS == 3){
                    ASSET_MANAGER.playAsset("./music/Corruption.ogg");
                    ASSET_MANAGER.autoRepeat("./music/Corruption.ogg");
                }
                return;
            }else{
                this.bar.r = -1;
            }
            this.bar.startD = false;
            this.bar.startL = false;
            this.bar.startR = false;
            this.bar.startU = false;
            ctx.font = '250px Calibri';
            ctx.fontSize = "100pt";
            ctx.fillStyle = "White";
            ctx.fillText("You Died", this.width/2-450, this.height/2);
            ctx.font = '100px Calibri';
            ctx.fillText("press enter to restart", this.width/2-450, this.height/2+100);
            ctx.font = '100px Calibri';
            ctx.fontSize = "100pt";
            ctx.fillStyle = "White";
            ctx.fillText("Score:"+this.score, this.width/4, this.height/4);
            ctx.font = '100px Calibri';
            
        }
        
        
        
        
        
    };
}