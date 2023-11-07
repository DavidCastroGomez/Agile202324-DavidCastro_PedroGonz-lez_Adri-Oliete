class SpriteController {

    constructor(_anims) {
        this.animation = _anims;
    }

    create() { }

    playAnimation(key) {
        this.animation.play(key, true);
    }

    updateAnim(direction, action) { }
}