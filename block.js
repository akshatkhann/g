class Block{
    
    constructor(x, y, width, height) {
     
      var options = {
         friction:0.8,
        density:1.0, 
      restitution:0.5 
      }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255  
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
          push()
        
          translate(this.body.position.x,this.body.position.y)
     
          rotate(this.body.angle)
     fill("white")
          rectMode(CENTER);
          rect( 0,0, this.width, this.height);
          pop()
          
          
          
          }
          else{
          push()
            World.remove(world,this.body)
            tint(255,this.visibility)
            this.visibility=this.visibility-5
        
          pop()
        
        if(this.visibility<0 && this.visibility>-105){
score++

        }
          
      
      }







        }
      
      
      }