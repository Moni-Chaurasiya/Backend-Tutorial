console.log("Moni")
/*let a=1;
let b=2;
let c=3;
console.warn(a+b+c);*/
//import{x} from './app'

const app = require('./app')
console.log(app)
/*const arr=[2,34,56,89,2,3,6];
arr.filter((item)=>{
    console.log(item)
})*/

const arr=[2,34,56,89,2,3,6];

let result=arr.filter((item)=>{
    return item==2
})
console.warn(result)