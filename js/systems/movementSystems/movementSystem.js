class MovementSystem{
    constructor(_speed, _self, _runningMultipler){
        this.speed = _speed;
        this.originalSpeed = _speed;
        this.self = _self;
        this.runningMultipler = _runningMultipler;
    }

    Move(direction){
        
        switch(direction){

            case 'up':
                this.self.body.velocity.y -= this.speed;
                break;
            case 'right':
                this.self.body.velocity.x += this.speed;
                break;
            case 'left':
                this.self.body.velocity.x -= this.speed;
                break;
            case 'down':
                this.self.body.velocity.y += this.speed;
                break;
        }
    }

    Run(){
        this.speed = this.originalSpeed * this.runningMultipler;
    }

    Walk(){
        this.speed = this.originalSpeed;
    }
}