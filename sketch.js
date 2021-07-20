var tgroup, collidergroup, obgroup;

var player, panimation, pidle, pjump, pdeath;

var tutorial, gamestate = true;
var GOimg;

var levelState = 0

var menu;


// kronovi-  --- Dyso
//LuizMelo --- Gyo
// edermunizz -- Forest Bg
//Platforms --- Maaot

// To Do List: DMOG
// Better Speechboxes


function setup() {
  
  tgroup = createGroup()
  collidergroup = createGroup()
  obgroup = createGroup()

  menu = new MainMenu()
  

  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(200); 

  menu.play()

  drawSprites();
  
}