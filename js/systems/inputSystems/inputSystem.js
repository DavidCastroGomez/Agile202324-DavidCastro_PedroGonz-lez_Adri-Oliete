class InputSystem
{
    
    constructor(_attackSystem, _movementSystem){
        this.attackSystem = _attackSystem
        this.movementSystem = _movementSystem
    }

    PassInputs(input){
        
        switch(input){

            case up:
                //this.movementSystem.move()
            case right:
                //this.movementSystem.move()
            case left:
                //this.movementSystem.move()
            case down:
                //this.movementSystem.move()
            case run:
                //this.movementSystem.run()
            case attack:
                this.attackSystem.Attack()
        }

    }
}