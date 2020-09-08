const urlParams = new URLSearchParams(window.location.search);
function draw(title, subtitle, desc, color){
  document.writeln(`<div style="background-color:${color};line-height: 20px;"><br><br>`);
  document.writeln(`<p class="desc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${title}</p>`);
  document.writeln(`<p class="head">&nbsp;&nbsp;&nbsp;&nbsp;${subtitle}</p>`);
  document.writeln(`<p style="font-weight:300;font-size:20px;"><center>${desc}</center></p><br>`);
  document.writeln(`</div>`);
}
function code(title, subtitle, desc, color){
  document.writeln(`<textarea><div style="background-color:${color};line-height: 20px;"><br><br>`);
  document.writeln(`<p class="desc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${title}</p>`);
  document.writeln(`<p class="head">&nbsp;&nbsp;&nbsp;&nbsp;${subtitle}</p>`);
  document.writeln(`<p style="font-weight:300;font-size:20px;"><center>${desc}</center></p><br>`);
  document.writeln(`</div></textarea>`);
}
function lineBreakCount(str){
	/* counts \n */
	try {
		return((str.match(/[^\n]*\n[^\n]*/gi).length));
	} catch(e) {
		return 0;
	}
}
const title = urlParams.get('title');
const subtitle = urlParams.get('subtitle');
const description = urlParams.get('desc');
const color = urlParams.get('color');

draw(title, subtitle, marked(description), color);

var canvas = document.getElementById("demo")
var height = 
lineBreakCount * 20