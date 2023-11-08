class InputSystem {

    constructor(_scene, _attackSystem, _movementSystem) {
        this.attackSystem = _attackSystem;
        this.movementSystem = _movementSystem;
        this.scene = _scene;
    }

    GetInputs() {/*Will be overrided*/ }

    PassInputs(input) {

        switch (input) {
            case 'attack':
                this.attackSystem.Attack(this.movementSystem.GetLastDir())
                break;
            case 'chargingAttack':
                this.attackSystem.ChargeAttack()
                break;
            case 'chargedAttack':
                this.attackSystem.StopChargeAttack(this.movementSystem.GetLastDir())
                break;

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

        }

    }
}