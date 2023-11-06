class Character extends Phaser.GameObjects.Sprite {
    constructor(_scene, _x, _y, _tag) {
        super(_scene,  _x, _y, _tag)

        this.sprite;

        this.healthSystem
        this.attackSystem
        this.movementSystem
        this.inputSystem
        this.collisionManager

        this.scene = _scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
    }

    create(){
        
    }

    update() {
        this.inputSystem.GetInputs();
        this.sprite.update();

        /*
        this.healthSystem.update()
        this.attackSystem.update()
        this.movementSystem.update()
        this.inputSystem.update()
        this.collisionManager.update()
        */

    }

    SetMovementsystem(_mov) {
        this.movementSystem = _mov
    }

    GetMovementSystem(){
        return this.movementSystem
    }

    SetInputSystem(_aaa){
        this.inputSystem = _aaa
    }
}