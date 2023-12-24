class HeartPickup extends PickupClass {

    constructor(_scene, _x, _y){
        super(_scene, _x, _y, 'heart');
    }

    PickedUp(_hero){
        console.log("heart picked up")
        _hero.GetHealthSystem().HealthUp();
        super.PickedUp();
    }
}