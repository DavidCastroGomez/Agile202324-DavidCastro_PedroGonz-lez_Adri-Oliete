class Character extends Phaser.GameObjects.Sprite {
    constructor(_scene) {
        super(_scene, config.width/2,config.height/2, null)

        this.sprite = new SpriteManager(_scene);
        this.texture = this.sprite.tag;


        this.healthSystem
        this.attackSystem
        this.movementSystem
        this.inputSystem
        this.collisionManager

        _scene.add.existing(this);
        _scene.physics.world.enable(this)
    }

    create(){
        
    }

    update() {
        this.inputSystem.GetInputs();

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