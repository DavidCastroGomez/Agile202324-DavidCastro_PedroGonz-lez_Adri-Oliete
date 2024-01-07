class HeroHealthSystem extends HealthSystem {
    constructor(_maxHealth, _currentHealth, _scene, _owner) {
        super(_maxHealth, _currentHealth, _scene, _owner);
    }

    TakeDamage(_hitter) {
        if (super.GetScene().audioManager && super.GetCurrentHealth() >= .5 && !super.IsInvincible()) {
            super.GetScene().audioManager.playSFX('LTTP_Link_Hurt');
        }
        super.TakeDamage(_hitter);
    }

    DieAction() {
        if (super.GetScene().audioManager) {
            super.GetScene().audioManager.playSFX('LTTP_Link_Dying');
        }
        this.owner.GetMovementSystem().CanMove(false);
        super.GetScene().cameras.main.fadeOut(1000, 0, 0, 0, (camera, progress) => {
            if (progress === 1) {
                if (super.GetScene().audioManager) {
                    super.GetScene().audioManager.fadeOut();
                }
                super.GetScene().scene.restart();
                gamePrefs.heroHealth = gamePrefs.heroMaxHealth;
            }
        });
    }
}