/** Syntax Error */
//console.log("Hello"

/**RunTime Exception */
//let x= 3
//console.log(x.toUpperCase())

/**Logical error */
/*let num = 5
for(i=-3;i<5;i++){
    console.log(num/i) //Logical error is divideing by 0
}   */

try{
let obj= undefined
// let obj={
//     name:"Moni"
// }

console.log(obj.name)
}catch(err){
    console.log("Exception handled")
    console.log(err)
}finally{
    console.log("This is output")
}