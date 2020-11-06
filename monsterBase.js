class Base {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 2;
        this.body = Bodies.circle(x, y, this.r, options);
       
        this.x = x;
        this.y = y;

        World.add(world, this.body);
        this.image = loadImage("monster.png");
        
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
       

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
    }

};
