class MovementSystem {

    constructor(_speed, _owner, _runningMultipler) {
        this.speed = _speed;
        this.originalSpeed = _speed;
        this.owner = _owner;
        this.runningMultipler = _runningMultipler;
        this.idleDirection = 'idle_down';
        this.anim = 'idle_down';
        this.lastDir;
        this.canMove = true;
    }

    Move(direction) {
        if(this.canMove){
            switch (direction) {
                case 'up':
                    this.owner.body.velocity.y = -this.speed;
                    //this.anim = 'walk_up';
                    //this.idleDirection = 'idle_up';
                    this.lastDir = direction;
                    break;
                case 'right':
                    this.owner.body.velocity.x = this.speed;
                    //this.anim = 'walk_right';
                    //this.idleDirection = 'idle_right';
                    this.lastDir = direction;
                    break;
                case 'left':
                    this.owner.body.velocity.x = -this.speed;
                    //this.anim = 'walk_left';
                    //this.idleDirection = 'idle_left';
                    this.lastDir = direction;
                    break;
                case 'down':
                    this.owner.body.velocity.y = this.speed;
                    //this.anim = 'walk_down';
                    //this.idleDirection = 'idle_down';
                    this.lastDir = direction;
                    break;
                case 'stop_hor':
                    this.owner.body.velocity.x = 0;
                    this.anim = this.idleDirection
                    break;
                case 'stop_ver':
                    this.owner.body.velocity.y = 0;
                    this.anim = this.idleDirection
                    break;
            }
        }else{
            this.owner.body.velocity.x = 0;
            this.owner.body.velocity.y = 0;
        }

    }

    Run() {
        var dirSpeed = this.owner.body.velocity.normalize()

        this.speed = this.originalSpeed * this.runningMultipler;

        this.owner.body.velocity.x = dirSpeed.x * this.speed
        this.owner.body.velocity.y = dirSpeed.y * this.speed
        //this.owner.GetSpriteManager().playAnimation(this.anim);
    }

    Walk() {
        var dirSpeed = this.owner.body.velocity.normalize()
        this.speed = this.originalSpeed;
        this.owner.body.velocity.x = dirSpeed.x * this.speed
        this.owner.body.velocity.y = dirSpeed.y * this.speed
        //this.owner.GetSpriteManager().playAnimation(this.anim);
    }

    CanMove(bool){
        this.canMove = bool;
    }



    GetLastDir() {
        return this.lastDir
    }
}