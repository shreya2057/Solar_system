//Height and width of window
width = 2500;
height = 2500;

//Center of the solar system
let centerX = width/2;
let centerY = height/2;


angle = 0;
//speed for rotation of planets
let speed = 0.0000009;

//diameter of  orbit
mercury = 140;
venus = 218;
earth = 302;
mars = 496;
jupiter = 752;
saturn = 990;
uranus = 1476;
neptune = 2237;


//diameter of planets
mercuryDiameter = 10;
venusDiameter = 24;
earthDiameter = 25;
marsDiameter = 12;
jupiterDiameter = 69;
saturnDiameter = 58;
uranusDiameter = 34;
neptuneDiamter = 33;


function setup() {
  createCanvas(3000, 3000);
}

function draw() {
  background('black');
  solarSystem();
}

function solarSystem(){
 
  let angle = 0;
  drawSun({
    sunRadius: 100, //radius of the sun
    sunColor: "yellow" //color of the sun
  });
  
  orbit();
  planet();
  
}

function orbit(){
  drawOrbit(mercury);
  drawOrbit(venus);
  drawOrbit(earth);
  drawOrbit(mars);
  drawOrbit(jupiter);
  drawOrbit(saturn);
  drawOrbit(uranus);
  drawOrbit(neptune);
}

function planet(){
  translate(centerX, centerY);
  drawPlanet(140,mercuryDiameter, "#D3D3D3");
  drawPlanet(218,venusDiameter, "#A52A2A");
  drawPlanet(302,earthDiameter, " #3644E4");
  drawPlanet(496,marsDiameter, "	#D22B2B");
  drawPlanet(751,jupiterDiameter, "#FFAE42");
  drawPlanet(990,saturnDiameter, "#FFBF00");
  drawPlanet(1476,uranusDiameter, "#0D98BA");
  drawPlanet(2237,neptuneDiamter, "#007FFF");
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
  noStroke();
  fill(planetColor);
  angle = angle + speed;
  rotate(angle);
  circle(radius, 0, planetRadius);
  
}

function drawOrbit(radius){
  noFill();
  stroke('white');
  circle(centerX,centerY,radius);
  return 0;
}


function label(label, x, y){
  positionX = x+10;
  positionX = y+10;
  stroke('black');
  fill('black');
  text(label, positionX,positionY);
}