class EnemyInputSystem extends InputSystem {

    constructor(_scene, _attackSystem, _movementSystem, _owner) {
        super(_scene, _attackSystem, _movementSystem)

        this.owner = _owner

        this.delay = 5000;

        this.wanderRadius = 1;

        this.Modes = {
            WANDER: 0, SEEK: 1, ATTACK: 2
        }


        this.state = this.Modes.WANDER

        this.canCalculateWander = true;

        this.arrivedToTargetX = false;
        this.arrivedToTargetY = false;

        this.walls = _scene.getWalls();

        this.path = [];
        this.targetPoint;

        this.currentPathTarget;
    }

    GetInputs() {
        
        this.GeneratePosition()
        this.CheckIfArrivedToTarget()

        this.GoToPosition();
        
    }

    GeneratePosition() {
        switch (this.state) {
            case this.Modes.WANDER:
                this.WanderBehaviour();
                break;
        }
    }


    CheckIfArrivedToTarget() {

        
        if (this.walls.worldToTileX(this.owner.body.position.x) == this.currentPathTarget.x && !this.arrivedToTargetX) {
            this.arrivedToTargetX = true;
            super.PassInputs('stop_hor')
        }

        if (this.walls.worldToTileY(this.owner.body.position.y) == this.currentPathTarget.y && !this.arrivedToTargetY) {
            this.arrivedToTargetY = true;
            super.PassInputs('stop_ver')
        }

        if(this.arrivedToTargetX == true && this.arrivedToTargetY == true){
            this.removeFromArray(this.path, this.currentPathTarget);
            if(this.path.length > 0){
                
                this.currentPathTarget = this.path[0];
                this.arrivedToTargetX = false
                this.arrivedToTargetY = false

            }
        }
        
    }


    GoToPosition() {
        if (!this.arrivedToTargetX) {
            if (this.owner.body.position.x < this.walls.tileToWorldX(this.currentPathTarget.x)) {
                super.PassInputs('right')
            } else {
                super.PassInputs('left')
            }
        }

        if (!this.arrivedToTargetY) {
            if (this.owner.body.position.y > this.walls.tileToWorldY(this.currentPathTarget.y)) {
                super.PassInputs('up')
            } else {
                super.PassInputs('down')
            }
        }

    }

    WanderBehaviour() {
        if (this.canCalculateWander) {
            this.arrivedToTargetX = false;
            this.arrivedToTargetY = false;

            this.canCalculateWander = false;

            do {                
            
            // Calculate a random angle
            this.angle = Phaser.Math.RadToDeg(Phaser.Math.Angle.Random());

            this.cos = Math.cos(this.angle)
            this.sin = Math.sin(this.angle)

            // Calculate the new destination within the wander radius
            this.targetX = this.owner.body.position.x + this.wanderRadius * 200 * Math.cos(this.angle);
            this.targetY = this.owner.body.position.y + this.wanderRadius * 200 * Math.sin(this.angle);

            this.targetWorldTileX = this.walls.worldToTileX(this.targetX);
            this.targetWorldTileY = this.walls.worldToTileY(this.targetY);

            var index;

            if(this.targetWorldTileX > 4 &&
                this.targetWorldTileY > 4 &&
                this.targetWorldTileX < this.walls.worldToTileX(this.walls.width) - 4 &&
                this.targetWorldTileY < this.walls.worldToTileY(this.walls.height) - 4){

                    index = this.walls.getTileAt(this.targetWorldTileX, this.targetWorldTileY, true, 1).index
            }
            else{
                index = 7
            }
            if(this.owner.GetHealthSystem().IsDead()){
                return;
            }
            } while (index != -1);

            //Translate to map coor

            this.startTileX = this.walls.worldToTileX(this.owner.body.position.x);
            this.startTileY = this.walls.worldToTileY(this.owner.body.position.y);

            this.startPoint = new Phaser.Geom.Point(this.startTileX, this.startTileY);
            this.targetPoint = new Phaser.Geom.Point(this.targetWorldTileX, this.targetWorldTileY);

            this.path = this.findPath(this.walls, this.startPoint, this.targetPoint);

            this.currentPathTarget = this.path[0];

            this.scene.time.delayedCall(this.delay, () => {
                this.canCalculateWander = true;
            });
        }
    }

    //---------------A*---------------

    findPath(tilemap, start, end) {

        var openSet = [];
        var closedSet = [];

        openSet.push(start);

        start.g = 0;

        var maxIterations = 1000
    
        while (openSet.length > 0 && maxIterations > 0) {
            maxIterations--;
            var current = this.findLowestFScore(openSet);
    
            if (current.x === this.targetPoint.x && current.y === this.targetPoint.y) {
                // Path found
                return this.reconstructPath(current);
            }
    
            // Move current from open set to closed set
            this.removeFromArray(openSet, current);
            closedSet.push(current);
    
            var neighbors = this.getNeighbors(tilemap, current);
    
            for (var i = 0; i < neighbors.length; i++) {
                var neighbor = neighbors[i];
    
                if (closedSet.includes(neighbor)) {
                    continue; // Ignore the neighbor which is already evaluated
                }
    
                var tentativeGScore = current.g + 1; // Assuming each step has a cost of 1
    
                if (!openSet.includes(neighbor) || tentativeGScore < neighbor.g) {
                    // This path is the best until now. Record it!
                    neighbor.cameFrom = current;
                    neighbor.g = tentativeGScore;
                    neighbor.f = neighbor.g + this.heuristicCostEstimate(neighbor, end);
    
                    if (!openSet.includes(neighbor)) {
                        openSet.push(neighbor);
                    }
                }
            }
        }

        if(maxIterations == 0){
            //Not completed Path
            return this.reconstructPath(current);
        }
    
        // No path found
        return [];
    }
    
    findLowestFScore(set) {
        var lowest = set[0];
    
        for (var i = 1; i < set.length; i++) {
            if (set[i].f < lowest.f) {
                lowest = set[i];
            }
        }
    
        return lowest;
    }
    
    heuristicCostEstimate(start, end) {
        // Simple Euclidean distance heuristic
        return Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
    }
    
    getNeighbors(tilemap, current) {
        var neighbors = [];
        var directions = [
            { x: -1, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: -1 },
            { x: 0, y: 1 }
        ];
    
        for (var i = 0; i < directions.length; i++) {
            var dir = directions[i];
            var neighbor = { x: current.x + dir.x, y: current.y + dir.y };
    
            // Check if the neighbor is within the bounds of the tilemap
            if (
                neighbor.x > 0 &&
                neighbor.y > 0 &&
                neighbor.x < tilemap.width - 1 &&
                neighbor.y < tilemap.height - 1 &&
                tilemap.getTileAt(neighbor.x, neighbor.y, true, 1).index === -1
            ) {
                neighbors.push(neighbor);
            }
        }
    
        return neighbors;
    }
    
    reconstructPath(current) {
        var totalPath = [current];
    
        while (current.cameFrom) {
            current = current.cameFrom;
            totalPath.unshift(current);
        }

        console.log(totalPath);
    
        return totalPath;
    }
    
    removeFromArray(array, element) {
        var index = array.indexOf(element);
    
        if (index !== -1) {
            array.splice(index, 1);
        }
    }


}