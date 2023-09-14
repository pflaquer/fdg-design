import index  from './content.js'
import removalServices from './dob-violation-removal-services.js'
import navbar from './navbar.js'

//render navbar
let n = document.getElementById("navbar");
n.innerHTML = navbar();

let d = document.getElementById("main-container");
//let page = d.getAttribute('name');
//d.innerHTML = eval(page+())
//determine which data to render based on page
if(d.getAttribute("name") === "index"){
  d.innerHTML = "<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>"
  d.innerHTML = index()
}
else if(d.getAttribute("name") === "removal-services"){
d.innerHTML = removalServices();
}

