//Create variables here
var database;
var dog,happyDog,dogImg,dogImg2,foodS,foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(400,350,50,50);
  dog.addImage("dog",dogImg);
  dog.scale=0.1;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
  
}


function draw() {  
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
    readStock();
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


