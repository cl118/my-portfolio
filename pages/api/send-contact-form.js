import * as AWS from 'aws-sdk'
import * as nodemailer from 'nodemailer'

export default async function contactFormSendAPI(req, res) {
  const formData = req.body
  const result = await sendContactEmail(formData.name, formData.email, formData.message)
  res.json(result)
}

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
})

AWS.config.getCredentials(function (err) {
  if (err) {
    console.log(err.stack)
  }
})

const ses = new AWS.SES({ apiVersion: '2010-12-01' })
const adminEmail = 'christopher.vinh.le@gmail.com'
const transporter = nodemailer.createTransport({
  SES: ses,
})

const sendContactEmail = async (name, email, message) => {
  try {
    const res = await transporter.sendMail({
      from: adminEmail,
      to: adminEmail,
      subject: 'Contact Form Submission from chrisle.dev',
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        </head>
        <body>
          <div style="padding:20px;">
            <div style="max-width: 500px;">
              <h2>Contact Form Details</h2>
              <p>
                name: ${name}<br />
                email: ${email}<br />
                message: ${message}
              </p>
            </div>
          </div>
        </body>
      </html>
      `,
    })
    return res?.messageId ? { ok: true } : { ok: false, msg: 'failed to send message' }
  } catch (err) {
    console.log('ERROR', err.message)
    return { ok: false, msg: 'failed to send message' }
  }
}
