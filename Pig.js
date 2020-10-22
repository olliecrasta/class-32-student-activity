class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255;
    
  }


  display(){
    console.log(this.body.speed)
    //if the speed is greater than 3 or if its has started fading due to an attack, only then fade it
    //if it totally fades away,then remove from the world
    if(this.body.speed>3 || this.visibility<255 ){
        this.visibility = this.visibility -5
        if(this.visibility <= 0){
          World.remove(world,this.body)
        }
    }
    push();
    tint(255,this.visibility);
    super.display();
    pop();
  }

};

};
