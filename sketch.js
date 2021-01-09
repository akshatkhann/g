const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score=0;
function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


polygon= new Polygon(325,400,50,50)
ground=new Ground(400,500,6000,6)    
block1=new Block(985,370,30,30)
block2=new Block(1016,370,30,30)
block3=new Block(1046,370,30,30)
ground2=new Ground2(1015,390,200,6)
block4=new Block(1077,370,30,30)
block5=new Block(955,370,30,30)
block6=new Block(1047,345,30,30)
block7=new Block(1015,345,30,30)
block8=new Block(985,345,30,30)
block9=new Block(1015,315,30,30)
chain=new Chain(polygon.body,{x:325,y:380})

}

function draw(){
   rectMode(CENTER)
   background(1000) 
   textSize(35)
   fill("black")
 text("Score :"+score,1000,50 )
 
   Engine.update(engine);
    polygon.display()
ground.display()
block1.display()
block2.display()
block3.display()
ground2.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
chain.display()
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})






}

function mouseReleased(){

chain.fly()
    
}





function keyPressed(){
    if(keyCode===32){
    
    chain.attach(polygon.body)
    
    
    
    }
    
    
    
    
    
     }





