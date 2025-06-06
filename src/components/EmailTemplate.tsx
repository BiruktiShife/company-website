interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  service?: string;
  phone?: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  message,
  service,
  phone,
}) => (
  <div>
    <h2 style={{ color: "#1E3A5F", fontSize: "24px", marginBottom: "20px" }}>
      New Contact Form Submission
    </h2>
    <div style={{ marginBottom: "20px" }}>
      <p style={{ marginBottom: "10px" }}><strong>Name:</strong> {name}</p>
      <p style={{ marginBottom: "10px" }}><strong>Email:</strong> {email}</p>
      {phone && <p style={{ marginBottom: "10px" }}><strong>Phone:</strong> {phone}</p>}
      {service && <p style={{ marginBottom: "10px" }}><strong>Service:</strong> {service}</p>}
      <p style={{ marginBottom: "10px" }}><strong>Message:</strong></p>
      <p style={{ 
        backgroundColor: "#f5f5f5", 
        padding: "15px", 
        borderRadius: "5px",
        whiteSpace: "pre-wrap"
      }}>{message}</p>
    </div>
  </div>
); 