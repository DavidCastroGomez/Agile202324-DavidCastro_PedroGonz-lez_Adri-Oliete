class HeroHealthSystem extends HealthSystem {
    constructor(_maxHealth, _scene, _self) { 
        super(_maxHealth, _scene, _self);
    }

    DieAction(){
        //Play death animation, wait till end and jump next line
        super.scene.cameras.main.fadeIn(1000,0,0,0,(camera, progress)=>{
            if(progress===1){
                super.scene.scene.restart();
            }
        });
    }
}