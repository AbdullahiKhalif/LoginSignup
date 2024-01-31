import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abdullahikhalif115@gmail.com',
    pass: 'iwhphccqwfjintwb',
  },
});

const sendEmailToForgetPassword = (to, password) => {
  const mailOptions = {
    from: 'abdullahikhalif115@gmail.com',
    to,
    subject: 'Forget Password',
    html: `
      <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              background-color: #f4f4f4;
              color: #333;
            }
           
            h2 {
              color: #3498db;
            }
            p {
              line-height: 1.6;
            }
            a {
              color: #3498db;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="">
            <h2>Forget Password</h2>
            <p>Please Copy Your Password:</p>
            <h3>${password}</h3>
          </div>
        </body>
      </html>
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Failed to send email verification:', err);
      return 'Failed to send email verification';
    } else {
      console.log('Email sent successfully');
      return 'Successfully sent yor email';
    }
  });
};

export default sendEmailToForgetPassword;