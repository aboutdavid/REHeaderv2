function draw(){

// Draw canvas 
var c = document.getElementById("preview");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText(desc, 10, 50);
}