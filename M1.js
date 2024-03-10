var http = require('http');
/*var dt = require('./myfirstmodule');*/
var url= require('url');

const server=http.createServer(function(req, res){
    res.writeHead(200,{'content-type':'text/html'});
   /* res.end('Hello World!');*/
  /*  res.write("The date and time are currently:" + dt.myDateTime());*/
   /* res.write(req.url);*/
      
    
    /*  var q =url.parse(req.url,true).query;
      var txt = q.year + " " + q.month;
      res.end(txt);*/
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  