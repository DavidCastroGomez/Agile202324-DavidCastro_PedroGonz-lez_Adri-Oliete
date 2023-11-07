class Character extends Phaser.GameObjects.Sprite {
    constructor(_scene, _x, _y, _tag) {
        super(_scene, _x, _y, _tag)

        this.sprite = new SpriteController(this.anims);
        this.state;

        this.healthSystem = new HealthSystem();
        this.attackSystem = new AttackSystem(_scene, this, 1);
        this.movementSystem = new MovementSystem(1, this, 1);
        this.inputSystem = new InputSystem(_scene, this.attackSystem, this.movementSystem);
        this.collisionManager = new CollisionManager();

        _scene.add.existing(this);
        _scene.physics.world.enable(this);
    }

    create() {

    }

    update() {
        this.inputSystem.GetInputs();
        this.sprite.updateAnim(this.movementSystem.GetLastDir(), 'attack');


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

    GetMovementSystem() {
        return this.movementSystem
    }

    GetAttackSystem() {
        return this.attackSystem
    }

    SetInputSystem(_aaa) {
        this.inputSystem = _aaa
    }

    GetSpriteManager() {
        return this.sprite
    }
}