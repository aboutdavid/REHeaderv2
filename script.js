function draw(){
// Set form values
var title = document.getElementById("title").value;
var subtitle = document.getElementById("subtitle").value;
var desc = document.getElementById("desc").value
// Draw canvas 
var c = document.getElementById("preview");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
}