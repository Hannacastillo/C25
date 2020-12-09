const World=Matter.World;
const Engine= Matter.Engine;
const Bodies=Matter.Bodies;

var myengine,myworld;
var box1, box2,box3,box4,box5
var ground
var pig1,pig2
var log1,log2,log3,log4
var bird1
var back

function preload(){

back=loadImage("sprites/bg.png")



}

function setup() {
  createCanvas(1000,600);
  myengine=Engine.create();
  myworld=myengine.world;

 box1=new Box(700,500,60,60);
 box2=new Box(900,500,60,60)
 box3=new Box(700,350,60,60);
 box4=new Box(900,350,60,60)
 box5=new Box(800,250,60,60)
 
 pig1=new Pig(800,500)
 pig2=new Pig(800,350)

log1=new Log(800,400,260,PI/2)
log2=new Log(800,300,260,PI/2)
log3=new Log(750,250,130,PI/4)
log4=new Log(830,250,130,-PI/4)

bird1=new Bird(50,300)

ground=new Ground(500,590,1000,20)


}

function draw() {
  background(back);  
  Engine.update(myengine);
 
//imageMode(CENTER)
//image(back,500,300,1000,600)


  box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
pig1.display()
pig2.display()
log1.display()
log2.display()
log3.display()
log4.display()
bird1.display()

ground.display()

}