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
                self.body.velocity.y -= speed;
            case 'right':
                self.body.velocity.x += speed;
            case 'left':
                self.body.velocity.x -= speed;
            case 'down':
                self.body.velocity.y += speed;
        }
    }

    Run(){
        speed = originalSpeed * runningMultipler;
    }

    Walk(){
        speed = originalSpeed;
    }
}