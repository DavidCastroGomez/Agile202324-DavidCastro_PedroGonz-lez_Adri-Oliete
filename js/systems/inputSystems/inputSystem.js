class InputSystem
{
    
    constructor(_scene, _attackSystem, _movementSystem){
        this.attackSystem = _attackSystem;
        this.movementSystem = _movementSystem;
        this.scene = _scene;
    }

    GetInputs(){/*Will be overrided*/}

    PassInputs(input){
        
        switch(input){

            case 'up':
                this.movementSystem.Move('up')
                break;
            case 'right':
                this.movementSystem.Move('right')
                break;
            case 'left':
                this.movementSystem.Move('left')
                break;
            case 'down':
                this.movementSystem.Move('down')
                break;
            case 'run':
                this.movementSystem.Run()
                break;
            case 'walk':
                //this.movementSystem.Walk()
            case 'attack':
                //this.attackSystem.Attack()
        }

    }
}