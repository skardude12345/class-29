class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.image1 = loadImage("./sprites/sling1.png");
        this.image2 = loadImage("./sprites/sling2.png");
        this.image3 = loadImage("./sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.image1, 250, 70, 50, 150);
        image(this.image2, 220, 70, 50, 90);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(49, 23, 8);
            line(pointA.x - 15, pointA.y, pointB.x + 40, pointB.y);
            line(pointA.x - 15, pointA.y, pointB.x + 80, pointB.y - 5);
            image(this.image3, pointA.x - 30, pointA.y - 15, 10, 30);
        }
    }
    
}