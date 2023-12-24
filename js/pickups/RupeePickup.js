class RupeePickup extends PickupClass {

    constructor(_scene, _x, _y){
        super(_scene, _x, _y, 'rupee');
        this.body.setSize(8, 14);
    }

    PickedUp(_hero){
        console.log("rupee picked up")
        //add rupee to hero
        super.PickedUp();
    }
}