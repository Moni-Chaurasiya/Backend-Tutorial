/**Bring the logic of adding two numbers */

const operation = require("./PWbackend5a.js")
console.log(typeof operation)
console.log( operation) 

//console.log(add(5,6))
/*console.log( operation.add(34,56))
console.log( operation.prod(34,56))*/


const a= require("./PWbackend5a.js")
console.log(a,__dirname,__filename) 

/*(function(exports,require,module,__dirname,__filename){
  // Module code actually lives here

});*/



// TO RUN import CODE WE HAVE TO INCLUDE "type":"module" in package.json and when we include this the above code will not workto run that code we have to remove  "type":"module" in package.json
/*import {x,y,z} from "./PWbackend5a.js"
console.log(x,y,z)
import {m,o,n,i} from "./PWbackend5a.js"
console.log(m,o,n,i)

import obj from "./PWbackend5a.js"
console.log(obj) */