class EnemyInputSystem extends InputSystem {

    constructor(_scene, _attackSystem, _movementSystem) {
        super(_scene, _attackSystem, _movementSystem)

        //super

        this.delay = 2000;
    }

    GetInputs() {
        GenerateMovement()
    }

    GenerateMovement(){

    }

    WanderBehaviour(){
        this.time.delayedCall(this.delay, function () {

            // Calculate a random angle
            const angle = Math.random() * 2 * Math.PI;
    
            // Calculate the new destination within the wander radius
            enemy.targetX = enemy.x + enemy.wanderRadius * Math.cos(angle);
            enemy.targetY = enemy.y + enemy.wanderRadius * Math.sin(angle);
    
            // Move the enemy towards the new destination
            this.physics.moveToObject(enemy, { x: enemy.targetX, y: enemy.targetY }, 100);
    
            // Continue the wandering behavior
            wanderEnemy.call(this, enemy);
        });
    }

    
}