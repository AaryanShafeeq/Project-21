class Ground {
    constructor(x, y, w, h) {
      let options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.x = x;
      this.y = y
      this.width = w
      this.height = h

      World.add(world, this.body);
    }

    display() {
        push();
        rectMode(CENTER);
        stroke(255);
        fill(197)
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}