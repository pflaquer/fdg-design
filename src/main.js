import index  from './content.js'
import removalServices from './dob-violation-removal-services.js'

if(document.getElementById("main-container").getAttribute("name") === "index"){
  document.getElementById("main-container").innerHTML = index()
}

