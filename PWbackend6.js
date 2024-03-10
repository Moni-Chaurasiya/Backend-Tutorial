/** Read from external file */
//Synchronous Read
const fs = require('fs')
console.log(typeof fs)

console.log("Before start to read")

const content= fs.readFileSync("PW.txt")
console.log(content)
console.log("Output content is:"+content)


console.log("After read")


//Asychronous Read 

console.log("Before start to read")

fs.readFile("PW.txt",(err,content)=>{
    if(err){
    return console.log(err)
    }else{
        console.log("Output content is:"+content) 
    }
})


console.log("After read")

/**Write the code to write to an external file */
console.log("Before start to read")

fs.writeFileSync("output.txt","Hello Everyone!",err=>{
    if(err){
        return console.log(err)
    }else{
    console.log("written successfully")
}
})

console.log("After read")



