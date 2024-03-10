// console.log("Hello Moni")
var slugify = require('slugify')
let a=slugify('some string') // some-string
console.log(a);


//if you prefer something other than '-' as seperator
let b=slugify('some string', '_') // some-string
console.log(b);