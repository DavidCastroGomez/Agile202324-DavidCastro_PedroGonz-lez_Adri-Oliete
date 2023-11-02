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

        positionOffset = 100

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

        const colliderObject = new ColliderObject(scene, positionX, positionY, 5000);
        _scene.physics.add.colldier(colliderObject, _enemies)

    }

}