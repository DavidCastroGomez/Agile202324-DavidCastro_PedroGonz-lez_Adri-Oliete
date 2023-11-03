var gamePrefs=
{

}

var config = 
{
    type: Phaser.AUTO,
    width: 512,
    height: 384,
    scene:[PedroTestScene],
    render:
    {
        pixelArt:true
    },
    scale:
    {
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH
    },
    physics:
    {
        default:'arcade',
        arcade:
        {
            gravity:{y:0},
            debug: true
        }
    }
};

var juego = new Phaser.Game(config);