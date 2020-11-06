class allein extends Base {
    constructor(x, y){
      super(x,y);
      this.image = loadImage("allein.png");

    }
    display(){
      super.display();
      Matter.Body.setPosition(this.body,{x:this.x,y:random(this.y+50,this.y-50)});
    }
  
  };