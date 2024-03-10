const fs = require("fs")

//console.log(fs)

console.log("starting")
//fs.writeFileSync("Moni.txt","Moni is a good girl")
fs.writeFile("Moni.txt","Moni is a good girl",()=>{
    console.log("done")
    fs.readFile("Moni.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
fs.appendFile("Moni.txt" ,"Chaurasiya",(e,d)=>{
    console.log(d.toString())
})
console.log("ending")