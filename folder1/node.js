const http = require('http');
const fs = require('fs');

const hostname ='127.0.0.1';
const port =3000;
const index = fs.readFileSync('./index.html','utf-8');
const about = fs.readFileSync('./about.html','utf-8');
const services = fs.readFileSync('./services.html','utf-8'); 
const contact =fs.readFileSync('./contact.html','utf-8');

const server =fs.readFileSync((req,res)=>{
    console.log(req.url);

    res.statusCode=200;
    res.setHeader('Contact-Type','text/html');
    res.end(home);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});