var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'monichaurasiya993@gmail.com',
    pass: '@#&CHAURASIYA1805'
  }
});

var mailOptions = {
  from: 'monichaurasiya993@gmail.com',
  to: 'monichaurasiya8790@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});