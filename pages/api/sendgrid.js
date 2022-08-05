import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'christopher.vinh.le@gmail.com', // Your email where you'll receive emails
      from: 'christopher.vinh.le@gmail.com', // your website email address here
      subject: `[Lead from website]`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>

        <body>
          <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <h3>You've got a new mail from ${req.body.formName}, their email is: ✉️${req.body.formEmail} </h3>
            <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.formMessage}</p>
            </div>
          </div>
        </body>
      </html>`,
    })
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
