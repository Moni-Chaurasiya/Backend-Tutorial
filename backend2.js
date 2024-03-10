//import * as fs from 'node:fs/promises';


//import * as fs from 'node:fs';

const fs = require("fs");
const text = fs.readFileSync("apple.txt","utf-8",);
text= text.replace("Moni","Chaurasiya")
console.log("The content of the file is:")
console.log(text);


console.log("Creating a new file...")
fs.writeFileSync("rohan.txt",text);



