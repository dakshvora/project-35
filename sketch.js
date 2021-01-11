//Create variables here
var dI, dI1;
var database;
var dog;
var foods=0;
function preload()
{
  dI= loadImage("images/dogImg.png")
  dI1=loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(800, 700);
  database= firebase.database();
  //dog
  dog = createSprite(300,300);
  dog.addImage(dI);
  dog.scale=0.5;
  //foodstock reading
  var foodstock = database.ref("Food");
  foodstock.on("value", (data)=>{foods = data.val()});
}


function draw() {  

  background("lightgreen");
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dI1);
  }
  text("Food available"+foods, 200,50)
  drawSprites();
  //add styles here

}
function writeStock(x){

if(x<= 0){
  x=0;
}
else{
  x=x-1;
}

  database.ref('/').update({Food:x});
}


