class Character extends Phaser.GameObjects.Sprite {
    constructor(_scene, _x, _y, _tag, _maxHealth) {
        super(_scene, _x, _y, _tag)

        this.sprite = new SpriteController(this);
        this.state = 'idle';

        this.healthSystem = new HealthSystem(_maxHealth, _scene, this);
        this.attackSystem = new AttackSystem(_scene, this, 280);
        this.movementSystem = new MovementSystem(1, this, 1);
        this.inputSystem = new InputSystem(_scene, this.attackSystem, this.movementSystem);

        _scene.add.existing(this);
        _scene.physics.world.enable(this);

        this.setGeneralSceneColliders(_scene);
    }

    setGeneralSceneColliders(_scene) {
        _scene.physics.add.collider
            (
                this,
                _scene.walls
            );
    }

    update(delta) {
        this.inputSystem.GetInputs();
        this.attackSystem.updateAttackSystem(delta);
        this.sprite.updateAnim(this.movementSystem.GetLastDir(), this.state);
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

    GetHealthSystem() {
        return this.healthSystem;
    }
}