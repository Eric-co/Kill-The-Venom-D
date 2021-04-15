class Monster{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:1
        }

      
      this.body =  Bodies.rectangle(x,y,width,height, options);
      this.image = loadImage ("images/monster.png")
      this.width = width;
      this.height = height;
      World.add(world,this.body);

    }
    show(){
        push();
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
        pop();
    }
  
  
  }
  