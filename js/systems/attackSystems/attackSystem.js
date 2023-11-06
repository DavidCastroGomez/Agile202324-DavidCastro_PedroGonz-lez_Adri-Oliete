class AttackSystem{
    
    constructor(_scene, _character){
        this.scene = _scene
        this.character = _character
    }

    AddEnemies(_enemies){
        this.enemies = _enemies
    }

    Attack(direcion){

        //positionX = this.character.body.position.x//TODO: Get character position_character.position
        //positiony = this.character.body.position.x//TODO: Get character position_character.position

        this.positionOffset = 100

        switch(direcion){
            case 0:
                positionX += positionOffset; 
                break
            case 1:
                positionY += positionOffset; 

            case 2:
                positionX -= positionOffset; 

            case 3:
                positionY -= positionOffset; 

        }

        this.colliderObject = new HitboxPrefab(scene, positionX, positionY, 5000);
        _scene.physics.add.collider(colliderObject, _enemies)

    }

}