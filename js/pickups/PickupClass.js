class PickupClass extends Phaser.GameObjects.Sprite {

    constructor(_scene, _x, _y, _tag){
        super(_scene, _x, _y, _tag);

        this.scene = _scene;

        this.despawnTime = 2000;

        this.scene.add.existing(this);
        
        this.scene.physics.world.enable(this);

        this.body.setSize(8, 8);
        this.body.setOffset(0, 0);
        this.setAlpha(2);
        this.setOrigin(0.25, 0.25);

        this.DespawnAfterTime();

    }

    PickedUp(){
        this.Despawn()
    } 

    SpawnFromEnemy(_enemyPosition){
        this.x = _enemyPosition.x;
        this.y = _enemyPosition.y;

        this.setActive(true);
        this.setVisible(true);

        this.body.checkCollision.none = false;
        this.DespawnAfterTime();
    }

    DespawnAfterTime(){
        this.scene.time.delayedCall(this.despawnTime, () => {
            if(this.active)
                this.toggleBlink();
        });        
    }

    Despawn(){
        this.setActive(false);
        this.setVisible(false);
        this.body.checkCollision.none = true;
    }

    toggleBlink() {
        const timeline = this.scene.add.timeline([
            {
                at: 100,
                run:() => {
                    this.setAlpha(0)
                }
            },
            {
                at: 200,
                run:() => {
                    this.setAlpha(1)
                }
            },
            {
                at: 300,
                run:() => {
                    this.setAlpha(0)
                }
            },
            {
                at: 400,
                run:() => {
                    this.setAlpha(1)
                }
            },
            {
                at: 500,
                run:() => {
                    this.setAlpha(0)
                }
            },
            {
                at: 600,
                run:() => {
                    this.setAlpha(1)
                }
            },
            {
                at: 700,
                run:() => {
                    this.setAlpha(0)
                }
            },
            {
                at: 800,
                run:() => {
                    this.setAlpha(1)
                }
            },
            {
                at: 900,
                run:() => {
                    this.setAlpha(0)
                }
            },
            {
                at: 1000,
                run:() => {
                    this.setAlpha(1)
                }
            },
            {
                at: 1100,
                run:() => {
                    this.setAlpha(0)
                }
            },
            {
                at: 1200,
                run:() => {
                    this.setAlpha(1)
                }
            },
            {
                at: 1300,
                run:() => {
                    this.setAlpha(0)
                }
            },
            {
                at: 1400,
                run:() => {
                    this.setAlpha(1)
                }
            },
            {
                at: 1500,
                run:() => {
                    this.Despawn()
                }
            },
        ]);

        timeline.play();
    }

}