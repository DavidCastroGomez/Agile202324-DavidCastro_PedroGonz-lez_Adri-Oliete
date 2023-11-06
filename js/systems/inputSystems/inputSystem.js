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
            case 'right':
            case 'left':
            case 'down':
            case 'stop_hor':
            case 'stop_ver':
                this.movementSystem.Move(input)
                break;
            case 'run':
                this.movementSystem.Run()
                break;
            case 'walk':
                this.movementSystem.Walk()
                break;
            case 'attack':
                this.attackSystem.Attack()
                break;
        }

    }
}