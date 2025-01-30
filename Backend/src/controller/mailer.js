import nodemailer from 'nodemailer';

export const sendEmail = async (recipientEmail) => {
  // Create a transporter for sending the email
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (e.g., gmail)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Image URL (external image)
  const imageUrl = 'https://wallpapershome.com/images/pages/pic_h/25382.jpg'; // Modify this URL to your image

  // Email content (HTML with image URL)
  const htmlContent = `
    <html>
      <body>
        <h1 style="color: #3498db;">Welcome to Sukuyomi!</h1>
        <p style="font-size: 16px; color: #2c3e50;">We are excited to have you on board!</p>
        <p style="font-size: 16px;">Here is an image to greet you:</p>
        <img src="${imageUrl}" alt="Greeting Image" style="width: 100%; max-width: 600px;" />
      </body>
    </html>
  `;

  // Set up email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmail,
    subject: 'Welcome Email',
    html: htmlContent, // HTML content
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Example usage
// sendEmailWithImageURL('recipient@example.com');
