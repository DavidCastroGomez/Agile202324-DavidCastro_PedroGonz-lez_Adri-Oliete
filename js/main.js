var gamePrefs =
{
    gameWidth: 512,
    gameHeight: 384
}

var config =
{
    type: Phaser.AUTO,
    width: gamePrefs.gameWidth,
    height: gamePrefs.gameHeight,
    scene: [TestScene],
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