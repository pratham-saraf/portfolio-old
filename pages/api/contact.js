import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function Contact(req, res) {
  const { message } = req.body;
  console.log(req.body);
  const msg = {
    to: "prathammsaraf@gmail.com",
    from: "pratham4641ssr@gmail.com",
    template_id: " d-0a5aedc605d34f50afcea92008e15876",
    dynamic_template_data: {
      body: message,
    },
  };

  try {
    //console.log("Email has been sent");
    await sgMail.send(msg);
    res.json({ message: "Email has been sent" });
  } catch (error) {
    console.log("FAILED TO SEND MESSAGE");
    res.status(500).json({ error: "Error sending email contact", res });
  }
}
