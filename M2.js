var http = require('http');
var fs = require('fs');

const server=http.createServer(function(req, res){
    fs.readFile('about1.html',function(err,data){
    res.writeHead(200,{'content-type':'text/html'});
  /* fs.appendFile('Moni.txt','Hello content!',function(err) // This will append the content to the end of the file
    {
        if(err) throw err;
        console.log('Saved!');
    }); */
   
    res.write(data);
    return res.end();
    });
    fs.appendFile('Moni.txt','Hello content!',function(err)
    {
        if(err) throw err;
        console.log('Saved!');
    }); 

});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });