class Character
{
    constructor(_scene){
        this.sprite = new SpriteManager(_scene,0,0,null);
        this.healthSystem = new HealthSystem();
        this.attackSystem = new AttackSystem();
        this.movementSystem = new MovementSystem(1, this.sprite, 2);
        this.inputSystem = new InputSystem(this.attackSystem, this.movementSystem);
        this.collisionManager = new CollisionManager();
    }

    update(){
        this.inputSystem.GetInputs();
    }
}