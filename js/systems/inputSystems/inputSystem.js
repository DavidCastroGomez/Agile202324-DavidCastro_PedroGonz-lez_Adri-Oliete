class InputSystem {

    constructor(_scene, _attackSystem, _movementSystem) {
        this.attackSystem = _attackSystem;
        this.movementSystem = _movementSystem;
        this.scene = _scene;
    }

    GetInputs() {/*Will be overrided*/ }

    PassInputs(input, duration) {

        switch (input) {
            case 'stop_hor':
            case 'stop_ver':

            case 'up':
            case 'right':
            case 'left':
            case 'down':
                this.movementSystem.Move(input)
                break;
            case 'run':
                this.movementSystem.Run()
                break;
            case 'walk':
                this.movementSystem.Walk()
                break;
            case 'attack':
                this.attackSystem.Attack(this.movementSystem.GetLastDir())
                break;
            case 'chargedAttack':
                this.attackSystem.ChargeAttack(this.movementSystem.GetLastDir(), duration)
                break;
        }

    }
}