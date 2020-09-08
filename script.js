const urlParams = new URLSearchParams(window.location.search);
function draw(title, subtitle, desc, color){
  document.writeln(`<div style="background-color:${color};line-height: 20px;"><br><br>`);
  document.writeln(`<p class="desc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${title}</p>`);
  document.writeln(`<p class="head">&nbsp;&nbsp;&nbsp;&nbsp;${subtitle}</p>`);
  document.writeln(`<p style="font-weight:300;font-size:20px;"><center>${desc}</center></p><br>`);
  document.writeln(`</div>`);
}
const title = urlParams.get('title');
const subtitle = urlParams.get('subtitle');
const description = urlParams.get('desc');
const color = urlParams.get('color');

draw(title, subtitle, marked(description), color);