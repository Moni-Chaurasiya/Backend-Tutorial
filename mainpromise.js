import fs from "fs/promises"
let a= await fs.readFile("Moni.txt")
let b= await fs.writeFile("Moni.txt", "This is amazing")
console.log(a.toString(),b)
//console.log(b.toString())