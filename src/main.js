import index  from './content.js'
import removalServices from './dob-violation-removal-services.js'

if(document.getElementById("main-container").getAttribute('page') === 'index'){
  document.getElementById("main-container-pg1").innerHTML = index()
}

