class HeartPickup extends PickupClass {

    constructor(_scene, _x, _y){
        super(_scene, _x, _y, 'heart');
    }

    PickedUp(_hero){
        console.log("heart picked up")
        if(super.getScene().audioManager){
            super.getScene().audioManager.playSFX('LTTP_Heart');
        }
        _hero.GetHealthSystem().HealthUp();
        super.PickedUp();
    }
}