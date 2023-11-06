class MovementSystem {
    constructor(_speed, _self, _runningMultipler) {
        this.speed = _speed;
        this.originalSpeed = _speed;
        this.self = _self;
        this.runningMultipler = _runningMultipler;
        this.idleDirection = 'idle_down';
        this.anim = 'idle_down';
        this.lastDir;
    }

    Move(direction) {

        switch (direction) {

            case 'up':
                this.self.body.velocity.y = -this.speed;
                this.anim = 'walk_up';
                this.idleDirection = 'idle_up';
                this.lastDir = direction;
                break;
            case 'right':
                this.self.body.velocity.x = this.speed;
                this.anim = 'walk_right';
                this.idleDirection = 'idle_right';
                this.lastDir = direction;
                break;
            case 'left':
                this.self.body.velocity.x = -this.speed;
                this.anim = 'walk_left';
                this.idleDirection = 'idle_left';
                this.lastDir = direction;
                break;
            case 'down':
                this.self.body.velocity.y = this.speed;
                this.anim = 'walk_down';
                this.idleDirection = 'idle_down';
                this.lastDir = direction;
                break;
            case 'stop_hor':
                this.self.body.velocity.x = 0;
                this.anim = this.idleDirection
                break;
            case 'stop_ver':
                this.self.body.velocity.y = 0;
                this.anim = this.idleDirection
                break;
        }
        
    }

    Run() {
        var dirSpeed = this.self.body.velocity.normalize()

        this.speed = this.originalSpeed * this.runningMultipler;

        this.self.body.velocity.x = dirSpeed.x * this.speed
        this.self.body.velocity.y = dirSpeed.y * this.speed
        this.self.GetSpriteManager().playAnimation(this.anim);
    }

    Walk() {
        var dirSpeed = this.self.body.velocity.normalize()
        this.speed = this.originalSpeed;
        this.self.body.velocity.x = dirSpeed.x * this.speed
        this.self.body.velocity.y = dirSpeed.y * this.speed
        this.self.GetSpriteManager().playAnimation(this.anim);
    }

    GetLastDir(){
        return this.lastDir
    }
}