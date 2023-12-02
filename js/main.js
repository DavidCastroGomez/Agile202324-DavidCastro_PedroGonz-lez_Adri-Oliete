var gamePrefs =
{
    mapStartIndexToCharge: 0,
    gameWidth: 512,
    gameHeight: 384,
    scene0_Width: 224,
    scene0_Height: 176
}

var config =
{
    type: Phaser.AUTO,
    width: gamePrefs.gameWidth,
    height: gamePrefs.gameHeight,
    scene: [Scene0_LinkHouse],
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