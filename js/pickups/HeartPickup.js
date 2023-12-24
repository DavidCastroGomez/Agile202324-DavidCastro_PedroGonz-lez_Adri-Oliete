class HeartPickup extends PickupClass {

    constructor(_scene, _x, _y){
        super(_scene, _x, _y, 'heart');
        
        this.type = this.PickupType.HEART;
    }

    PickedUp(_hero){
        console.log("heart picked up")
        _hero.GetHealthSystem().HealthUp();
        super.PickedUp();
    }
}