const urlParams = new URLSearchParams(window.location.search);
function draw(image, title, subtitle, desc, color){
  document.writeln(`<div style="background-color:${color};line-height: 20px;"><br><br>`);
  // <img src="Error.src" onerror="this.style.display='none'"/>
  document.writeln(`<center><img src="${image}" alt="Profile Picture" width="128" height="128" onerror="this.style.display='none'"></center>`)
  document.writeln(`<p class="desc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${title}</p>`);
  document.writeln(`<p class="head">&nbsp;&nbsp;&nbsp;&nbsp;${subtitle}</p>`);
  document.writeln(`<p style="font-weight:300;font-size:20px;"><center>&nbsp;&nbsp;&nbsp;&nbsp;${desc}</center></p><br>`);
  document.writeln(`</div>`);
}
const image = urlParams.get('image');
const title = urlParams.get('title');
const subtitle = urlParams.get('subtitle');
const description = urlParams.get('desc');
const color = urlParams.get('color');

if (!title || !subtitle || !description || !color){
  alert('A value was not found, stopping rendering...')
  window.stop();
}
draw(image, title, subtitle, marked(description), color);