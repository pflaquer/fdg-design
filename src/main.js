import index  from './content.js'
import removalServices from './dob-violation-removal-services.js'
import navbar from './navbar.js'
import cta from './cta.js'
//render cta

let cta = document.getElementById("cta");
cta.innerHTML = cta();

//render navbar
let n = document.getElementById("navbar");
n.innerHTML = navbar();

let d = document.getElementById("main-container");
//let page = d.getAttribute('name');
//d.innerHTML = eval(page+())
//determine which data to render based on page
if(d.getAttribute("name") === "index"){
  d.innerHTML = index()
}
else if(d.getAttribute("name") === "removal-services"){
d.innerHTML = removalServices();
}

