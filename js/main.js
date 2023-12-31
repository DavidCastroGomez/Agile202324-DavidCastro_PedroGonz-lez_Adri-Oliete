var gamePrefs =
{
    mapStartIndexToCharge: 0,
    heroMaxHealth: 3,
    heroHealth: 3,
    heroKeys: 0,
    heroMoney: 0,

    enemyHealth: 1,
    
    gameWidth: 512,
    gameHeight: 384,

    mainScreen_Width: 879,
    mainScreen_Height: 659,
    
    tutoScreen_Width: 1890,
    tutoScreen_Height: 1417,

    scene0_Width: 224,
    scene0_Height: 176,

    scene1_Width: 816,
    scene1_Height: 1616,

    scene2_Width: 576,
    scene2_Height: 512,
    scene2_LocksOpen: [],

    scene3_Width: 736,
    scene3_Height: 1152,
    scene3_LocksOpen: [],

    scene4_Width: 912,
    scene4_Height: 912,

    scene5_Width: 1264,
    scene5_Height: 1664,
    scene5_LocksOpen: [],
    
    finalScreen_Width: 256,
    finalScreen_Height: 192
}

var config =
{
    type: Phaser.AUTO,
    width: gamePrefs.gameWidth,
    height: gamePrefs.gameHeight,
    transparent: true,
    scene: [
        SceneUI_StartScreen, 
        SceneUI_TutorialScreen, 
        Scene0_LinkHouse, 
        Scene1_Overworld, 
        Scene2_TheWell, 
        Scene3_HyruleCastle, 
        Scene4_Catacombs,
        Scene5_SewersToTheSanctuary,
        SceneUI_FinalScreen
    ],
    render:
    {
        pixelArt: true
    },
    scale:
    {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics:
    {
        default: 'arcade',
        arcade:
        {
            gravity: { y: 0 }//, debug: true
        }
    }
};

var juego = new Phaser.Game(config);