class HeroInputSystem extends InputSystem{

    constructor(_scene, _attackSystem, _movementSystem){
        super(_scene, _attackSystem, _movementSystem)     
        
        this.cursors = _scene.input.keyboard.createCursorKeys();
        this.attackKey = _scene.input.keyboard.addKey('O');
        this.runKey = _scene.input.keyboard.addKey('P');
        this.interactKey = _scene.input.keyboard.addKey('I');
    }

    GetInputs(){

        if (this.cursors.up.isDown) {
            super.PassInputs('up')
        } 
        if (this.cursors.right.isDown) {
            super.PassInputs('right')
        }
        if (this.cursors.left.isDown) {
            super.PassInputs('left')
        } 
        if (this.cursors.down.isDown) {
            super.PassInputs('down')
        }

        if (this.runKey.isDown) {
            super.PassInputs('run')
        }
        else{
            super.PassInputs('walk')
        }
    
        if (attackKey.isDown) {
            super.PassInputs('attack')
        }
    }
}