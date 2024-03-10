const http = require('http');
const fs = require('fs');

const hostname ='127.0.0.1';
const port =3000;
const index1 = fs.readFileSync('index1.html','utf-8');
const about1 = fs.readFileSync('about1.html','utf-8');
const services1 = fs.readFileSync('services1.html','utf-8'); 
const contact1 = fs.readFileSync('contact1.html','utf-8');

const server =fs.readFileSync((req,res)=>{
    console.log(req.url);

    res.statusCode=200;
    res.setHeader('Contact-Type','text/html');
    res.end(home);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});