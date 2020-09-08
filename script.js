const urlParams = new URLSearchParams(window.location.search);
// Set up a function (this also can be used as an API)
function draw(title, subtitle, desc, color){
  document.writeln(`<div style="background-color:${color};"><br><br>`);
  document.writeln(`<p class="desc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${title}</p>`);
  document.writeln(`<p class="head">&nbsp;&nbsp;&nbsp;&nbsp;${subtitle}</p>`);
  document.writeln(`<p class="head"><center>&nbsp;&nbsp;&nbsp;&nbsp;${desc}</center></p>`);
  document.writeln(`</div>`);
};
// Get URL Params
const title = urlParams.get('title');
const subtitle = urlParams.get('subtitle');
const description = urlParams.get('desc');
const color = urlParams.get('color');
// Do fancy markdown

draw(title, subtitle, description, color);