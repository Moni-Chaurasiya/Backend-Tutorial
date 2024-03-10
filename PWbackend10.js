import fs from "fs/promises"


let a = await fs.readFile("PW.txt")
let b = await fs.appendFile("PW.txt","\n This is amazing")

import path from "path"

console.log(path)

let myPath = " C:\\Users\\Govind\\OneDrive\\Desktop\\Web Development\\PW.txt"
console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))
console.log(path.join("c:/","programs\\Moni.txt"))

