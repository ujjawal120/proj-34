class Block{
  constructor(x,y,width,height){
    var options = {
      restitution: 0.4,
      friction: 1.0,
      //isStatic: true
    }
    this.body = bodies.rectangle(x, y, width, height, options);
    this.witdh = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){

    var angle = this.body.angle;
    var pos= this.body.position;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTRE);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
