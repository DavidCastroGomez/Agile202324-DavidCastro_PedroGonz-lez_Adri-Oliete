class Hero extends Character
{
    constructor(){
        //super.sprite = 
        //super.attackSystem = 
        super.inputSystem = new PlayerInput();
        
        //Movement, collision and health systems are generic
    }
}