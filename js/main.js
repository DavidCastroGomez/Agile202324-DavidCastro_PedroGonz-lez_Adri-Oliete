var gamePrefs =
{
    mapStartIndexToCharge: 0,
    heroMaxHealth: 3,
    heroHealth: 3,
    heroKeys: 0,
    
    gameWidth: 512,
    gameHeight: 384,

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
    scene5_LocksOpen: []
}

var config =
{
    type: Phaser.AUTO,
    width: gamePrefs.gameWidth,
    height: gamePrefs.gameHeight,
    scene: [Scene0_LinkHouse, Scene1_Overworld, Scene2_TheWell, Scene3_HyruleCastle, Scene4_Catacombs,Scene5_SewersToTheSanctuary],
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
            gravity: { y: 0 },
            debug: true
        }
    }
};

var juego = new Phaser.Game(config);