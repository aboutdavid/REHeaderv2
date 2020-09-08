const urlParams = new URLSearchParams(window.location.search);
function draw(title, subtitle, desc, color){
  document.writeln(`<div style="background-color:lightblue;font-family:'Open Sans',sans-serif;"><div class="container-sm"><br><br>`)
  document.writeln(`<h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${title}</h1>`)
  document.writeln(`</div></div>`)
}
const title = urlParams.get('title');
const subtitle = urlParams.get('subtitle');
const description = urlParams.get('desc');

draw(title, subtitle, description)