class Paper{
    constructor(x, y) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.color= color(random(0,255),random(0,255),random(0,255));
        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 20;
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
      }
}
