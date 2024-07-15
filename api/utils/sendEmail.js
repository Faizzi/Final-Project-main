import nodemailer from "nodemailer";
export const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SERVICE,
      host: process.env.HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    const mailOptions = {
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    };
    console.log("Sending email to:", email);
    console.log("Email subject:", subject);
    console.log("Email text:", text);
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    return error;
  }
};

export default sendEmail;
