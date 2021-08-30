//Height and width of window
width = windowWidth;
height = windowHeight;

//Center of the solar system
let centerX = width/2;
let centerY = height/2;


angle = 0;
//speed for rotation of planets
let speed = 0.03;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('black');
  solarSystem();
}

function solarSystem(){
 
  let angle = 0;
  drawSun({
    sunRadius: 60, //radius of the sun
    sunColor: "yellow" //color of the sun
  });
  
  orbit(150);
  orbit(250);
  // placePlanet(30,"Venus", 150, "blue");
  //  //1st planet: Mercury
 
  translate(centerX, centerY);
  
  
  drawPlanet(150,20, "red");
  drawPlanet(250,20, "red");
  // placePlanet(30,"Venus", 150, "blue");
  
}


function drawSun({sunRadius, sunColor}){
  noStroke();
  ellipseMode(CENTER);
  fill(sunColor);
  circle(centerX,centerY,sunRadius);
  stroke('black');
  fill('black');
  text('Sun', 490,500);
}

function drawPlanet(orbitRadius, planetRadius, planetColor){
  radius = orbitRadius/2;
  print(radius);
  noStroke();
  fill(planetColor);
  angle = angle + speed;
  rotate(angle);
  circle(radius, 0, planetRadius);
  
}

function orbit(radius){
  noFill();
  stroke('white');
  circle(centerX,centerY,radius);
  return 0;
}




function placePlanet(planetRadius, planetName, orbitRadius, planetColor){


 
  // angle = angle + speed;
  return drawPlanet(orbitRadius, planetRadius, planetColor);
}

// function rotatePlanet(angle){
//   rotate(angle);
// }

function label(label, x, y){
  positionX = x+10;
  positionX = y+10;
  stroke('black');
  fill('black');
  text(label, positionX,positionY);
}