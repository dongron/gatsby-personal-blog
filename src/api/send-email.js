const nodemailer = require('nodemailer')

const service = process.env.NODEMAILER_SERVICE
const user = process.env.NODEMAILER_USER
const pass = process.env.NODEMAILER_PASSWORD

const transporter = nodemailer.createTransport({
  service,
  auth: {
    user,
    pass,
  },
})

export default async function handler(req, res) {
  console.log('Received request:', service, user, pass)

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  if (!service || !user || !pass) {
    console.error('Missing Nodemailer environment variables')
    return res.status(500).json({ error: 'Server configuration error' })
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${user}>`,
      replyTo: email,
      to: user,
      subject: `SDDG Contact Form: Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
