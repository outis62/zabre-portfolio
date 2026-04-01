import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstname, lastname, email, phone, service, message } = body;

    if (!firstname || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 1. Email de notification → toi
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Nouveau message de ${firstname} ${lastname || ""}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${firstname} ${lastname || ""}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Service :</strong> ${service || "Non spécifié"}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    // 2. Auto-reply → visiteur
    await transporter.sendMail({
      from: `"Zabré Boureima" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Merci pour votre message, ${firstname} !`,
      html: `
        <h2>Bonjour ${firstname},</h2>
        <p>Merci pour votre message. Je l'ai bien reçu et je vous répondrai dans les plus brefs délais.</p>
        <p>Cordialement,<br/>Zabré Boureima</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}