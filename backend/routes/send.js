import nodemailer from "nodemailer";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/send", async (req, res) => {
  const { email, message } = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: "Email and Message are required." });
  }

  try {
    // ── Use explicit host/port STARTTLS on 587 ───────────────────────────────
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,               // false = use STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // allow self-signed / corporate certs
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_USER,
      subject: "New Contact from Portfolio",
      text: message,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("✉️ send error:", error);
    res.status(500).json({ error: "Something went wrong sending mail." });
  }
});

export default router;
