
const fs= require("fs")



//console.log(fs)

console.log("starting")
//fs.writeFileSync("PW1.txt", "Moni is a good girl")
fs.writeFile("PW1.txt","My college is located in Navi Mumbai",()=>{
   console.log("done")
   fs.readFile("PW.txt",(err,data)=>{
    console.log(err,data.toString())
   })
})

console.log("ending")