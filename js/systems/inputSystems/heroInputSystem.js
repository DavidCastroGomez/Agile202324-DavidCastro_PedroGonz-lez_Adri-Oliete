class HeroInputSystem extends InputSystem{

    constructor(_attackSystem, _movementSystem){
        super(_attackSystem, _movementSystem)     
        
        cursors = this.input.keyboard.createCursorKeys();
        attackKey = this.input.keyboard.addKey('O');
        runKey = this.input.keyboard.addKey('P');
        interactKey = this.input.keyboard.addKey('P');

    }

    GetInputs(){

        if (cursors.left.isDown) {
            super.PassInputs(up)
        } else if (cursors.right.isDown) {
            super.PassInputs(up)
        }
    
        if (cursors.up.isDown) {
            super.PassInputs(up)
        } else if (cursors.down.isDown) {
            super.PassInputs(up)
        }
    
        // Handle player actions
        if (attackKey.isDown) {
            // Handle the 'O' key for attacking
            super.PassInputs(attack)
        }
    
        if (runKey.isDown) {
            // Handle the 'P' key for running
            super.PassInputs(run)
        }


    }

}