require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
const port = 3001;

// Enable CORS
app.use(cors());
app.use(express.json());

// Initialize Resend with API key from .env
const resend = new Resend(process.env.RESEND_API_KEY);

// Test the API key on startup
resend.emails
  .send({
    from: "onboarding@resend.dev",
    to: "biruktawitshiferaw522@gmail.com",
    subject: "API Key Test",
    html: "Testing Resend API key configuration",
  })
  .then(({ data, error }) => {
    if (error) {
      console.error("❌ Resend API key test failed:", error);
    } else {
      console.log("✅ Resend API key is valid and working");
    }
  })
  .catch((error) => {
    console.error("❌ Resend API key test failed:", error);
  });

app.post("/api/contact", async (req, res) => {
  console.log("Received contact form submission:", req.body);

  const { firstName, lastName, email, phone, service, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif;">
      <h2 style="color: #1E3A5F; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h2>
      <div style="margin-bottom: 20px;">
        <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
        <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
        ${phone ? `<p style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</p>` : ""}
        ${service ? `<p style="margin-bottom: 10px;"><strong>Service:</strong> ${service}</p>` : ""}
        <p style="margin-bottom: 10px;"><strong>Message:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
      </div>
    </div>
  `;

  try {
    console.log("Attempting to send email with Resend...");
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "biruktawitshiferaw522@gmail.com",
      subject: `New Contact Form Submission - ${service}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend API error:", error);
      return res.status(500).json({
        error: "Failed to send email",
        details: error.message || "No error details available",
      });
    }

    console.log("Email sent successfully:", data);
    res.json(data);
  } catch (error) {
    console.error("Server error:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
    res.status(500).json({
      error: "Error sending email",
      details: error.message || "Unknown error occurred",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
