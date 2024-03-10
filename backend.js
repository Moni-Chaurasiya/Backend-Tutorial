//console.log("Moni")
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
 // res.end('Hello, World!\n');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Alignment</title>
      <style>
          *{
  
          }
  
          .Container{
              width: 580px;
              border: 4px solid rgb(180, 136, 241);
              margin:13px auto;
          
  
  
          }
  
          .item{
              border: 3px solid rgb(111, 42, 42);
              margin: 12px 3px;
              padding: 12px 3px;
              background: rgb(4, 241, 71);
              width: 550px;
          }
          #Fruit{
              float: Right;
              width: 55%;
  
          }
          #Computer{
              
          }
          #Stationary{
               float: left;
               width: 100%
          }
      </style>
  </head>
  <body>
      <div class="Container">
      <div id="Fruits" class="item">
          <h3>Fruits</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero, dicta eum atque sint eius eaque eveniet autem magnam omnis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, mollitia! Animi temporibus perspiciatis rem illo, inventore nobis vel? Cupiditate reprehenderit cum a nobis eius totam in delectus qui commodi aspernatur magnam asperiores id soluta rem maiores unde velit voluptas officia, ad placeat non ipsa numquam. Magnam corporis optio quidem atque!</p>
      </div>
      <div id="Computer" class="item">
          <h3>Computers</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero, dicta eum atque sint eius eaque eveniet autem magnam omnis.</p>
      </div>
      <div id="Stationary" class="item">
          <h3>Stationary</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero, dicta eum atque sint eius eaque eveniet autem magnam omnis.</p>
      </div>
  </div>
  
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 