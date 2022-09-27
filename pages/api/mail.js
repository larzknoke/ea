const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  console.log("body", body);

  const SECRET_KEY = process.env.RECAPTCHA_SECRETKEY;
  const recaptchaResponse = body.recaptchaResponse;
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${recaptchaResponse}`;

  const message = `
    Name: ${body.name}\n
    Email: ${body.email}\n
    Telefon: ${body.telefon}\n
    Nachricht: ${body.nachricht}
  `;

  try {
    const recaptchaRes = await fetch(verifyUrl, { method: "POST" });

    const recaptchaJson = await recaptchaRes.json();

    console.log("recaptchaResponse", recaptchaJson);

    if (recaptchaJson.success) {
      mail
        .send({
          to: process.env.FORM_EMAIL,
          from: process.env.FORM_EMAIL,
          subject: "Neue Nachricht | Kontaktformular",
          text: message,
          html: message.replace(/\n/g, "<br>"),
        })
        .then(() => {
          res.status(200).json({ status: "Ok" });
        })
        .catch((error) => {
          console.log(error);
          res.status(422).json({ status: "Mail Send Error", e: error });
        });
    } else {
      res.status(422).json({ status: "ReCaptcha-Validation not successfull" });
    }
  } catch (e) {
    res.status(400).json(e.error);
  }
}
