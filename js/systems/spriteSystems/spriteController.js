class SpriteController {

    constructor(_owner) {
        this.animation = _owner.anims;
    }

    create() { }

    playAnimation(key) {
        this.animation.play(key, true);
    }

    updateAnim(direction, action) { }
}