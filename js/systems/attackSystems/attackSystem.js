class AttackSystem{
    
    constructor(_scene, _character){
        this.scene = _scene
        this.character = _character
    }

    AddEnemies(_enemies){
        this.enemies = _enemies
    }

    Attack(direcion){

        positionX = 0//TODO: Get character position_character.position
        positiony = 0//TODO: Get character position_character.position


        switch(direcion){
            case 0:
                positionX += 100; 

            case 1:
                positionY += 100; 

            case 2:
                positionX -= 100; 

            case 3:
                positionY -= 100; 

        }

        const colliderObject = new ColliderObject(scene, positionX, positionY, 5000);
        _scene.physics.add.colldier(colliderObject, _enemies)

    }

}