import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstname, lastname = "", email, phone = "Non renseigné", service = "Non spécifié", message } = await req.json();

    if (!firstname || !email || !message) {
      return Response.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // --- Email de notification vers toi ---
    const adminMailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Nouveau message de ${firstname} ${lastname}`,
      html: `
        <p>Hello <strong>Zabré Boureima</strong>,</p>
        <p>You got a new message from <strong>${firstname} ${lastname}</strong>:</p>

        <table style="width:100%; border-collapse:collapse; margin: 16px 0; font-size: 14px;">
          <tr>
            <td style="padding: 8px 12px; background:#f5f5f5; font-weight:600; width:140px;">Email</td>
            <td style="padding: 8px 12px; border-left: 3px solid #d0d0d0;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background:#f5f5f5; font-weight:600;">Phone</td>
            <td style="padding: 8px 12px; border-left: 3px solid #d0d0d0;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background:#f5f5f5; font-weight:600;">Service</td>
            <td style="padding: 8px 12px; border-left: 3px solid #d0d0d0;">${service}</td>
          </tr>
        </table>

        <p style="padding: 12px; border-left: 4px solid #e8c97e; font-style: italic; background: #fdfaf3;">
          ${message}
        </p>

        <p>
          Reply directly to this email to respond to <strong>${firstname}</strong>.<br><br>
          — Your Portfolio Contact Form
        </p>
      `,
    };

    await transporter.sendMail(adminMailOptions);

    // --- Auto-reply vers le visiteur ---
    const userMailOptions = {
      from: `"Zabré Boureima" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Merci pour votre message, ${firstname} !`,
      html: `
        <p>Bonjour <strong>${firstname}</strong>,</p>
        <p>Merci pour votre message. Je l'ai bien reçu et je vous répondrai dans les plus brefs délais.</p>
        <p style="padding: 12px; border-left: 4px solid #e8c97e; font-style: italic; background: #fdfaf3;">
          ${message}
        </p>
        <p>Cordialement,<br><strong>Zabré Boureima</strong></p>
      `,
    };

    await transporter.sendMail(userMailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return Response.json({ error: "Échec de l'envoi de l'email" }, { status: 500 });
  }
}