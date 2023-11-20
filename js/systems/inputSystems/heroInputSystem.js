class HeroInputSystem extends InputSystem {

    constructor(_scene, _attackSystem, _movementSystem) {
        super(_scene, _attackSystem, _movementSystem)

        this.up = _scene.input.keyboard.addKey('W');
        this.down = _scene.input.keyboard.addKey('S');
        this.left = _scene.input.keyboard.addKey('A');
        this.right = _scene.input.keyboard.addKey('D');
        this.attackKey = _scene.input.keyboard.addKey('O');
        this.runKey = _scene.input.keyboard.addKey('P');
        this.interactKey = _scene.input.keyboard.addKey('I');
    }

    GetInputs() {

        if (!this.up.isDown && !this.down.isDown)
            super.PassInputs('stop_ver')
        if (!this.left.isDown && !this.right.isDown)
            super.PassInputs('stop_hor')

        if (this.up.isDown)
            super.PassInputs('up')
        if (this.right.isDown)
            super.PassInputs('right')
        if (this.left.isDown)
            super.PassInputs('left')
        if (this.down.isDown)
            super.PassInputs('down')

        if (this.runKey.isDown)
            super.PassInputs('run')
        else
            super.PassInputs('walk')

        if (this.attackKey.isDown){
            super.PassInputs('attack')
            //super.PassInputs('charging_attack')
        }

        if (this.attackKey.isUp) {
            super.PassInputs('charged_attack')
        }
    }
}