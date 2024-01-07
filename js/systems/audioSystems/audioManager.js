class AudioManager {

    constructor(_scene) {
        this.scene = _scene;
    }

    preloadAudio(){
        
        //-------------------------------------------------------------Music:
        this.scene.load.setPath('res/audio/music');
        this.scene.load.audio('SceneUI_StartScreen_MainTheme', 'SceneUI_StartScreen_MainTheme.mp3');
        this.scene.load.audio('SceneUI_TutorialScreen_FairyFountain', 'SceneUI_TutorialScreen_FairyFountain.mp3');
        this.scene.load.audio('Scene0_LinkHouse_KakarikoVillage', 'Scene0_LinkHouse_KakarikoVillage.mp3');
        this.scene.load.audio('Scene1_Overworld_SealOfTheSevenMaidens', 'Scene1_Overworld_SealOfTheSevenMaidens.mp3');
        this.scene.load.audio('Scene2_TheWell_DarkDungeons', 'Scene2_TheWell_DarkDungeons.mp3');
        this.scene.load.audio('Scene3_HyruleCastle_HyruleCastle', 'Scene3_HyruleCastle_HyruleCastle.mp3');
        this.scene.load.audio('Scene4_Catacombs_LostAncientRuins', 'Scene4_Catacombs_LostAncientRuins.mp3');
        this.scene.load.audio('Scene5_SewersToTheSanctuary_DungeonOfShadows', 'Scene5_SewersToTheSanctuary_DungeonOfShadows.mp3');
        this.scene.load.audio('SceneUI_FinalScreen_ZeldasTheme', 'SceneUI_FinalScreen_ZeldasTheme.mp3');
        
        //-------------------------------------------------------------SFX:
        this.scene.load.setPath('res/audio/sfx');
        this.scene.load.audio('LTTP_Link_Hurt', 'LTTP_Link_Hurt.wav');
        this.scene.load.audio('LTTP_Link_Dying', 'LTTP_Link_Dying.wav');
        this.scene.load.audio('LTTP_Rupee', 'LTTP_Rupee.wav');
        this.scene.load.audio('LTTP_Heart', 'LTTP_Heart.wav');
        this.scene.load.audio('LTTP_Sword', 'LTTP_Sword.wav');
        this.scene.load.audio('LTTP_Sword_Spin', 'LTTP_Sword_Spin.wav');
        this.scene.load.audio('LTTP_Enemy_Hit', 'LTTP_Enemy_Hit.wav');
        this.scene.load.audio('LTTP_Enemy_Kill', 'LTTP_Enemy_Kill.wav');
        this.scene.load.audio('LTTP_Enemy_Chase', 'LTTP_Enemy_Chase.wav');
        this.scene.load.audio('LTTP_Unlock', 'LTTP_Unlock.wav');
        this.scene.load.audio('LTTP_Key', 'LTTP_Key.wav');
        this.scene.load.audio('LTTP_TravessingExit', 'LTTP_TravessingExit.wav');
        this.scene.load.audio('LTTP_Menu_Select', 'LTTP_Menu_Select.wav');
    }

    playMusic(_audioTag){
        this.music = this.scene.sound.add(_audioTag, { loop: true });
        this.music.play({ volume: .25});
    }

    fadeOut() {
        this.scene.tweens.add({
            targets: this.music,
            volume: 0,
            duration: 1000,
            ease: 'Linear',
            onComplete: this.music.stop()
        });
    }

    playSFX(_audioTag){
        this.scene.sound.add(_audioTag, { loop: false }).play({ volume: .75});
    }
}