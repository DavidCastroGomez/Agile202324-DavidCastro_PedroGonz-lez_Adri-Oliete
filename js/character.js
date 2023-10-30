class Character
{
    constructor(){
        var sprite = new SpriteManager();
        var healthSystem = new HealthSystem();
        var attackSystem = new AttackSystem();
        var movementSystem = new MovementSystem();
        var inputSystem = new InputSystem();
        var collisionManager = new CollisionManager();
    }
}