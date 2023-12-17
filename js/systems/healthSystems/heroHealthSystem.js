class HeroHealthSystem extends HealthSystem {
    constructor(_maxHealth, _scene, _owner) { 
        super(_maxHealth, _scene, _owner);
    }

    DieAction(){
        //Play death animation, wait till end and jump next line
        this.owner.GetMovementSystem().canMove = false;
        super.GetScene().cameras.main.fadeOut(1000,0,0,0,(camera, progress)=>{
            if(progress===1){
                super.GetScene().scene.restart();
                gamePrefs.heroHealth = gamePrefs.heroMaxHealth;
            }
        });
    }
}