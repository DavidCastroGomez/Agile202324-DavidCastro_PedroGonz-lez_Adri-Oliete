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
            case 'right':
                this.movementSystem.Move('right')
            case 'left':
                this.movementSystem.Move('left')
            case 'down':
                this.movementSystem.Move('down')
            case 'run':
                this.movementSystem.Run()
            case 'walk':
                this.movementSystem.Walk()
            case 'attack':
                this.attackSystem.Attack()
        }

    }
}