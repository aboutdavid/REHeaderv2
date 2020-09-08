const urlParams = new URLSearchParams(window.location.search);
function draw(title, subtitle, desc, color){
  document.getElementById("preview").innerHTML = `<div style="background-color:lightblue;"><div class="container"><h1>${title}</h1></div></div>`;
}
const title = urlParams.get('title');
const subtitle = urlParams.get('subtitle');
const description = urlParams.get('desc');

draw(title, subtitle, description)