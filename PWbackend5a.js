/*let add = (a,b)=>{
    return a+b
}
let prod=(a,b)=>{
    return(a*b)
}*/
let add
exports.add = (a,b)=>{
    return a+b
}
let prod
exports.prod=(a,b)=>{
    return(a*b)
}   

module.exports=add

module.exports= prod
  //OR
module.exports ={
    add:add,
    prod:prod
}

module.exports ={
    a:1,
    y:8,
    z:5,
    d:6 
}  
// TO RUN THIS CODE WE HAVE TO INCLUDE "type":"module" in package.json and when we include this the above code will not workto run that code we have to remove  "type":"module" in package.json
/*export const m = 1    //named export
export const o = 2
export const n = 3
export const i = 4*/

/*let obj
export default obj = {
    x:1,
    y:3
}*/
