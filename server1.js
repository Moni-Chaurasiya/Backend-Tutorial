/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => res.sendFile(__dirname + '/home.html'));
app.get('/about', (req, res) => res.sendFile(__dirname + '/about.html'));
app.get('/service', (req, res) => res.sendFile(__dirname + '/service.html'));
app.get('/contact', (req, res) => res.sendFile(__dirname + '/contact.html'));
app.get('/feedback', (req, res) => res.sendFile(__dirname + '/feedback.html'));

// Handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  // Store the data securely using your preferred method (e.g., database)
  console.log(`Received form submission - Name: ${name}, Email: ${email}, Message: ${message}`);
  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});*/
const http = require('http');
const fs = require('fs');

const hostname ='127.0.0.1';
const port =3000;
const index = fs.readFileSync('./home.html','utf-8');
const about = fs.readFileSync('./about.html','utf-8');
const services = fs.readFileSync('./services.html','utf-8'); 
const contact =fs.readFileSync('./contact.html','utf-8');
const feedback =fs.readFileSync('./feedback.html','utf-8');

const server =fs.readFileSync((req,res)=>{
    console.log(req.url);

    res.statusCode=200;
    res.setHeader('Contact-Type','text/html');
    res.end(home);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});