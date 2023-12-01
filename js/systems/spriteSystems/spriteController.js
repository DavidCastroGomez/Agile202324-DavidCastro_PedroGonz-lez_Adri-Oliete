class SpriteController {

    constructor(_owner) {
        this.animation = _owner.anims;
        this.create();
    }

    create() { }

    playAnimation(key) {
        this.animation.play(key, true);
    }

    updateAnim(direction, action) { }
}