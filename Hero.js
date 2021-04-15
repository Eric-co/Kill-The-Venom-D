class Hero {
    constructor(x,y,width,height){
      var options ={
          isStatic:false,
          restituion:0,
          friction:1,
          density:1.2
      }
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage ("images/hero.png");
      World.add(world,this.body);
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      



    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
    }
  
  
  }
  