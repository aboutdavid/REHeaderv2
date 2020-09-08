const urlParams = new URLSearchParams(window.location.search);
function draw(title, subtitle, desc, color){
  document.writeln(`<div style="background-color:${color};"><br><br>`);
  document.writeln(`<p class="desc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${title}</p>`);
  document.writeln(`<p class="head">&nbsp;&nbsp;&nbsp;&nbsp;${subtitle}</p>`);
  document.writeln(`</div>`);
}
const title = urlParams.get('title');
const subtitle = urlParams.get('subtitle');
const description = urlParams.get('desc');
const color = urlParams.get('color');

if (!title || !subtitle || !description || !color){
  alert('A value was not found, stopping rendering...')
  window.stop();
}
draw(title, subtitle, description, color);