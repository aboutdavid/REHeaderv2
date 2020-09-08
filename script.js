

const urlParams = new URLSearchParams(window.location.search);
function draw(profile, title, subtitle, desc, color){
  document.writeln(`<div style="background-color:${color};"><br><br>`);
  if (image){
    document.writeln(`<center><img src=${image} alt="Profile" width="500" height="600"></center>`)
  }
  document.writeln(`<p class="desc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${title}</p>`);
  document.writeln(`<p class="head">&nbsp;&nbsp;&nbsp;&nbsp;${subtitle}</p>`);
    document.writeln(`<p class="head"><center>&nbsp;&nbsp;&nbsp;&nbsp;${desc}</center></p>`);
  document.writeln(`</div>`);
}
const image = urlParams.get('image');
const title = urlParams.get('title');
const subtitle = urlParams.get('subtitle');
const description = urlParams.get('desc');
const color = urlParams.get('color');
draw(title, subtitle, description, color);