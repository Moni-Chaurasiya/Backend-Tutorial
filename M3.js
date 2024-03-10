var http = require('http');
var fs = require ('fs')

const server=http.createServer(function(req, res){
/*fs.open('Moni3.txt','w', function(err,file){   // It will create a new and empty file
    if(err) throw err;
    console.log('Saved!');
});*/

/*fs.writeFile('Moni3.txt','Hello Moni Chaurasiya!', function(err){  // writeFile replace the content of file
    if(err) throw err;
    console.log('Replaced!');
});*/

/*fs.unlink('Moni4.txt', function(err){  // Delete file
    if(err) throw err;
    console.log('File deleted!');
});*/

fs.rename('Moni5.txt','Moni6.txt', function(err){  // Delete file
    if(err) throw err;
    console.log('File renamed!');
});

});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });