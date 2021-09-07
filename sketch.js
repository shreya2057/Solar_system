//Height and width of window
width = 2500;
height = 2500;

//Center of the solar system
let centerX = width/2;
let centerY = height/2;


angle = 0;


planetDiameter = [
  4879.4,
  12103.6, 
  12742,
  6779,
  139822,
  116464,
  50724,
  49244
];

planetOrbit = [
  138.3, 
  217.32,
  302.02,
  497.8,
  1503.34,
  2970.2,
  5905,
  8950.4
];

planetColor = [
  "#D3D3D3", 
  "#A52A2A",
  "#3644E4",
  "#D22B2B",
  "#FFAE42",
  "#FFBF00",
  "#0D98BA",
  "#007FFF",
];

planetSpeed = [
  0.00129,
  0.00048,
  0.00057,
  0.0011,
  0.00034,
  0.000142,
  0.00014,
  0.00054
];



function setup() {
  createCanvas(3000, 3000);
}

function draw() {
  background('black');
  solarSystem();
}

function solarSystem(){
 

  sunRadius = 1392680;
  drawSun({
    sunRadius: sunRadius/15000, //radius of the sun
    sunColor: "yellow" //color of the sun
  });
  
  orbit();
  planet();
  
}

function orbit(){
  for(var j = 0; j< 8; j++){
    if(j==4){
      drawOrbit(planetOrbit[j]/2);
    }
    else if(j==5){
      drawOrbit(planetOrbit[j]/3);
    }
    else if(j==6 || j==7){
      drawOrbit(planetOrbit[j]/4);
    }
    else{
      drawOrbit(planetOrbit[j]);
    }
  }
}

function planet(){
  translate(centerX, centerY);

  for(var i = 7; i>= 0; i--){
    if(i==4){
      drawPlanet(planetOrbit[i]/2, planetDiameter[i]/2000, planetColor[i], planetSpeed[i]);
    }
    else if(i==5){
      drawPlanet(planetOrbit[i]/3, planetDiameter[i]/2000, planetColor[i], planetSpeed[i]);
    }
    else if(i==6 || i==7){
      drawPlanet(planetOrbit[i]/4, planetDiameter[i]/1500, planetColor[i], planetSpeed[i]);
    }
    else{
      drawPlanet(planetOrbit[i], planetDiameter[i]/500, planetColor[i], planetSpeed[i]);
    }
    
  }
}


function drawSun({sunRadius, sunColor}){
  noStroke();
  ellipseMode(CENTER);
  fill(sunColor);
  circle(centerX,centerY,sunRadius);
  stroke('black');
  fill('black');
  text('Sun', centerX-10,centerY);
}

function drawPlanet(orbitRadius, planetRadius, planetColor, planetSpeed){
  radius = orbitRadius/2;
  noStroke();
  fill(planetColor);
  angle= angle+planetSpeed;
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