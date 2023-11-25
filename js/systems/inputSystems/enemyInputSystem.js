class EnemyInputSystem extends InputSystem {

    constructor(_scene, _attackSystem, _movementSystem, _owner) {
        super(_scene, _attackSystem, _movementSystem)

        this.owner = _owner

        this.delay = 5000;

        this.wanderRadius = 1;

        this.Modes = {
            WANDER: 0, SEEK: 1, ATTACK: 2
        }
    

        this.state = this.Modes.WANDER

        this.canCalculateWander = true;

        this.arrivedToTargetX = false;
        this.arrivedToTargetY = false;
    }

    GetInputs() {
        this.GeneratePosition()
        this.CheckIfArrivedToTarget()

        this.GoToPosition();

    }

    GeneratePosition(){
        switch(this.state){
            case this.Modes.WANDER:
                this.WanderBehaviour();
                break;
        }     
    }


    CheckIfArrivedToTarget(){

        if(Math.abs(this.owner.body.position.x - this.targetX) < 1 && !this.arrivedToTargetX){
            this.arrivedToTargetX = true;
            super.PassInputs('stop_hor')
        }

        if(Math.abs(this.owner.body.position.y - this.targetY) < 1 && !this.arrivedToTargetY){
            this.arrivedToTargetY = true;
            super.PassInputs('stop_ver')
        }
    }


    GoToPosition(){
        if(!this.arrivedToTargetX)
        {
            if(this.owner.body.position.x < this.targetX){
                super.PassInputs('right')
            }else{
                super.PassInputs('left')
            }
        }

        if(!this.arrivedToTargetX)
        {
            if(this.owner.body.position.y < this.targetY){
                super.PassInputs('up')
            }else{
                super.PassInputs('down')
            }
        }
    }

    WanderBehaviour(){
        if(this.canCalculateWander){
            this.arrivedToTargetX = false;
            this.arrivedToTargetY = false;

            this.canCalculateWander = false;

            // Calculate a random angle
            this.angle = Phaser.Math.RadToDeg(Phaser.Math.Angle.Random());

            this.cos = Math.cos(this.angle)
            this.sin = Math.sin(this.angle)
    
            // Calculate the new destination within the wander radius
            this.targetX = this.owner.body.position.x + this.wanderRadius * 10 * Math.cos(this.angle);
            this.targetY = this.owner.body.position.y + this.wanderRadius * 0.1 * Math.sin(this.angle);

            this.scene.time.delayedCall(this.delay, ()  =>{
                this.canCalculateWander = true;
            });
        }
    }

    
}