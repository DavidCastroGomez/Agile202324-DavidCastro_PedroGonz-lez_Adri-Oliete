var gamePrefs=
{

}

var config = 
{
    type: Phaser.AUTO,
    width: 512,
    height: 384,
    scene:[gameState], //array con las escenas
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
            gravity:{y:0}
        }
    }
};

var juego = new Phaser.Game(config);