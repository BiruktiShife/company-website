import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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
    const { data, error } = await resend.emails.send({
      from: "Tebeka Law <onboarding@resend.dev>",
      to: "biruktawitshiferaw522@gmail.com",
      subject: `New Contact Form Submission - ${service}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Error sending email" });
  }
}
