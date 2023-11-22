class EnemyInputSystem extends InputSystem {

    constructor(_scene, _attackSystem, _movementSystem, _owner) {
        super(_scene, _attackSystem, _movementSystem)

        this.owner = _owner

        this.delay = 5000;

        this.wanderRadius = 50;

        const Modes = {
            WANDER, SEEK, ATTACK
        }
    

        this.state = Modes.WANDER

        this.canCalculateWander = true;
    }

    GetInputs() {
        GeneratePosition()
        GoToPosition();
    }

    GeneratePosition(){
        switch(this.state){
            case Modes.WANDER:
                this.WanderBehaviour();
                break;
        }     
    }

    GoToPosition(){
        if(positionX < targetX){
            super.PassInputs('right')
        }else{
            super.PassInputs('left')
        }

        if(positionY < targetY){
            super.PassInputs('up')
        }else{
            super.PassInputs('down')
        }
    }

    WanderBehaviour(){
        if(canCalculateWander){
            this.canCalculateWander = false;

            this.positionX = this.owner.body.position.x
            this.positionY = this.owner.body.position.y

            // Calculate a random angle
            this.angle = Math.random() * 2 * Math.PI;
    
            // Calculate the new destination within the wander radius
            this.targetX = positionX + this.wanderRadius * Math.cos(angle);
            this.targetY = positionY + this.wanderRadius * Math.sin(angle);

            this.time.delayedCall(this.delay, ()  =>{
                this.canCalculateWander = true;
            });
        }
    }

    
}