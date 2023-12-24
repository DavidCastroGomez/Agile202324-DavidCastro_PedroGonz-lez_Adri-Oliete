class PickupClass extends Phaser.GameObjects.Sprite {

    constructor(_scene, _x, _y, _tag){
        super(_scene, _x, _y, _tag);

        this.scene = _scene;

        this.despawnTime = 5000;

        this.scene.add.existing(this);
        
        this.scene.physics.world.enable(this);

        this.body.setSize(8, 8);
        this.body.setOffset(0, 0);
        this.setAlpha(2);
        this.setOrigin(0.25, 0.25);

        this.setGeneralSceneColliders(this.scene);

        this.DespawnAfterTime();
        this.SpawnAnimation();     
        
        this.body.checkCollision.none = false;

        this.despawnAnimationEvent;
    }

    setGeneralSceneColliders(_scene) {
        _scene.physics.add.collider
            (
                this,
                _scene.walls
            );
    }

    PickedUp(){
        this.Despawn()
    } 

    SpawnFromEnemy(_enemyPosition){
        this.x = _enemyPosition.x;
        this.y = _enemyPosition.y;

        this.body.checkCollision.none = false;

        this.setActive(true);
        this.setVisible(true);

        this.DespawnAfterTime();
        this.SpawnAnimation();
    }

    DespawnAfterTime(){
        this.despawnAnimationEvent = this.scene.time.delayedCall(this.despawnTime, () => {
            if(this.active)
                this.toggleBlink();
        });        
    }

    SpawnAnimation(){

        var originalY = this.y;
        var originalX = this.x;

        var randomX = Phaser.Math.Between(-50, 50);
        var xMovementDuration = randomX * 10;

        if(randomX < 0){
            xMovementDuration *= -1;
        }

        var randomY = Phaser.Math.Between(-25, 25);
        var yMovementDuration = randomY * 10;

        if(randomY < 0){
            yMovementDuration *= -1;
        }

        const timeline = this.scene.add.timeline([
            {
                at: 0,
                tween: {
                    targets:this,
                    x: originalX + randomX,
                    ease: 'Power2',
                    duration: xMovementDuration
                }
            },
            {
                at: 0,
                tween: {
                    targets:this,
                    y: originalY + randomY,
                    ease: 'Power2',
                    duration: yMovementDuration
                }
            },
            {
                at: yMovementDuration,
                tween: {
                    targets:this,
                    y: originalY + randomY + 20,
                    ease: 'bounce.out',
                    duration: 800
                }               
            }    
        ]);

        timeline.play();

    }

    Despawn(){
        this.setActive(false);
        this.setVisible(false);
        this.body.checkCollision.none = true;

        if(this.despawnAnimationEvent != null){
            this.despawnAnimationEvent.remove(false);
        }
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