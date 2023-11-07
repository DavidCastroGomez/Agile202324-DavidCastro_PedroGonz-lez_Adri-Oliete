class AttackSystem {

    constructor(_scene, _owner, _attackCooldown) {
        this.scene = _scene
        this.owner = _owner

        this.maxAttackCooldown = _attackCooldown
        this.currentAttackCooldown = this.maxAttackCooldown
    }

    AddEnemies(_enemies) {
        this.enemies = _enemies
    }

    Attack(direction) {
        if (this.currentAttackCooldown >= this.maxAttackCooldown) {
        }
        
        else {
            this.positionX = this.owner.body.position.x
            this.positionY = this.owner.body.position.y

            this.positionOffsetX = 40
            this.positionOffsetY = 40

            switch (direction) {
                case 'right':
                    this.positionX += this.positionOffsetX;
                    break
                case 'down':
                    this.positionY += this.positionOffsetY;
                    break
                case 'left':
                    this.positionX -= this.positionOffsetX;
                    break
                case 'up':
                    this.positionY -= this.positionOffsetY;
                    break
            }

            this.colliderObject = new HitboxPrefab(this.scene, this.positionX, this.positionY, 200);
            this.scene.physics.add.collider(this.colliderObject, this.enemies)

            this.currentAttackCooldown = 0
        }

    }


    update(delta) {

    }
}