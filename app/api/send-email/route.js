import emailjs from "@emailjs/nodejs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstname, lastname, email, phone, service, message } = body;

    if (!firstname || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        from_firstname: firstname,
        from_lastname: lastname,
        from_email: email,
        from_phone: phone,
        service: service || "Not specified",
        message,
        reply_to: email,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_AUTOREPLY_TEMPLATE,
      {
        from_firstname: firstname,
        from_email: email,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}