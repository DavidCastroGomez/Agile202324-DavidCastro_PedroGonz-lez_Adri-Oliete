class Character extends Phaser.GameObjects.Sprite {
    constructor(_scene, _x, _y, _tag) {
        super(_scene, _x, _y, _tag)

        this.sprite = new SpriteController(this);
        this.state = 'idle';

        this.healthSystem = new HealthSystem();
        this.attackSystem = new AttackSystem(_scene, this, 200);
        this.movementSystem = new MovementSystem(1, this, 1);
        this.inputSystem = new InputSystem(_scene, this.attackSystem, this.movementSystem);
        this.collisionManager = new CollisionManager();

        _scene.add.existing(this);
        _scene.physics.world.enable(this);

        this.setGeneralSceneColliders(_scene);
    }

    create() {

    }
    
    setGeneralSceneColliders(_scene){
        _scene.physics.add.collider
        (
            this,
            _scene.walls
        );
    }

    update(delta) {
        this.inputSystem.GetInputs();
        this.sprite.updateAnim(this.movementSystem.GetLastDir(), this.state);
        this.attackSystem.updateAttackSystem(delta);

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