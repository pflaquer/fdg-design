import index  from './content.js'
import removalServices from './dob-violation-removal-services.js'
let d = document.getElementById("main-container");

//determine which data to render based on page
if(d.getAttribute("name") === "index"){
  d.innerHTML = index()
}

