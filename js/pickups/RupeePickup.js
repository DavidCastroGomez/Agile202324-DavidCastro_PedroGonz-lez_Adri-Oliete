class RupeePickup extends PickupClass {

    constructor(_scene, _x, _y){
        super(_scene, _x, _y, 'rupee');
        this.body.setSize(8, 14);
    }

    PickedUp(_hero){
        if(super.getScene().audioManager){
            super.getScene().audioManager.playSFX('LTTP_Rupee');
        }
        _hero.GetMoneySystem().AddMoney(1)
        super.PickedUp();
    }
}