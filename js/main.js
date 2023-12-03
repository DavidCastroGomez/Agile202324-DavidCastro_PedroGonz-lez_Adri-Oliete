var gamePrefs =
{
    mapStartIndexToCharge: 0,
    heroHealth: 3,
    
    gameWidth: 512,
    gameHeight: 384,

    scene0_Width: 224,
    scene0_Height: 176,

    scene1_Width: 816,
    scene1_Height: 1616
}

var config =
{
    type: Phaser.AUTO,
    width: gamePrefs.gameWidth,
    height: gamePrefs.gameHeight,
    scene: [Scene0_LinkHouse,Scene1_Overworld],
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