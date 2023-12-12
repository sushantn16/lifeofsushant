import nodemailer from 'nodemailer';

export async function POST (req, res) {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'YourEmailService',
      auth: {
        user: 'your@email.com',
        pass: 'your-email-password',
      },
    });

    // Email content
    const mailOptions = {
      from: 'form@email.com',
      to: 'to@email.com',
      subject: `${name},${email}`,
      text: {message},
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    }
};