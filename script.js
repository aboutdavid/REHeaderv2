const urlParams = new URLSearchParams(window.location.search);
function draw(title, subtitle, desc, color){
  document.writeln(`<div style="background-color:lightblue;"><div class="container-sm"><br><br>`);
  document.writeln(`<p class="sub">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${title}</p>`);
  document.writeln(`<p class="head">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${subtitle}</p>`);
  document.writeln(`</div></div>`);
}
const title = urlParams.get('title');
const subtitle = urlParams.get('subtitle');
const description = urlParams.get('desc');

draw(title, subtitle, description);