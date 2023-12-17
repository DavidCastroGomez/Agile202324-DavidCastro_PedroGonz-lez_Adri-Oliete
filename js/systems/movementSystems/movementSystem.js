class MovementSystem {

    constructor(_speed, _owner, _runningMultipler) {
        this.speed = _speed;
        this.originalSpeed = _speed;
        this.owner = _owner;
        this.runningMultipler = _runningMultipler;
        this.lastDir = 'down';
        this.canMove = true;
    }

    Move(direction) {
        if (this.canMove) {
            this.owner.state = 'walk';
            switch (direction) {
                case 'up':
                    this.owner.body.velocity.y = -this.speed;
                    this.lastDir = direction;
                    break;
                case 'right':
                    this.owner.body.velocity.x = this.speed;
                    this.lastDir = direction;
                    break;
                case 'left':
                    this.owner.body.velocity.x = -this.speed;
                    this.lastDir = direction;
                    break;
                case 'down':
                    this.owner.body.velocity.y = this.speed;
                    this.lastDir = direction;
                    break;
                case 'stop_hor':
                    this.owner.state = 'idle'
                    this.owner.body.velocity.x = 0;
                    break;
                case 'stop_ver':
                    this.owner.state = 'idle'
                    this.owner.body.velocity.y = 0;
                    break;
            }
        }
    }

    Run() {
        var dirSpeed = this.owner.body.velocity.normalize()

        this.speed = this.originalSpeed * this.runningMultipler;

        this.owner.body.velocity.x = dirSpeed.x * this.speed;
        this.owner.body.velocity.y = dirSpeed.y * this.speed;
    }

    Walk() {
        var dirSpeed = this.owner.body.velocity.normalize()
        this.speed = this.originalSpeed;
        this.owner.body.velocity.x = dirSpeed.x * this.speed;
        this.owner.body.velocity.y = dirSpeed.y * this.speed;
    }

    CanMove(bool) {
        this.canMove = bool;

        if(!this.canMove){
            this.owner.body.velocity.x = 0;
            this.owner.body.velocity.y = 0;
        }
    }

    GetLastDir() {
        return this.lastDir;
    }
}