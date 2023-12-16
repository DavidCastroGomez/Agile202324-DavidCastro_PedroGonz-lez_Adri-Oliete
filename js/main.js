var gamePrefs =
{
    mapStartIndexToCharge: 3, //0
    heroHealth: 3,
    heroKeys: 0,
    
    gameWidth: 512,
    gameHeight: 384,

    scene0_Width: 224,
    scene0_Height: 176,

    scene1_Width: 816,
    scene1_Height: 1616,

    scene2_Width: 576,
    scene2_Height: 512
}

var config =
{
    type: Phaser.AUTO,
    width: gamePrefs.gameWidth,
    height: gamePrefs.gameHeight,
    scene: [Scene2_TheWell], // Scene0_LinkHouse,Scene1_Overworld,
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