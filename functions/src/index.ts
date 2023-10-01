import * as functions from "firebase-functions/v1";
import { createTransport } from "nodemailer";
// const cors = require("cors")({ origin: "https://grilllounge.fr/" });

// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Your company name to include in the emails
// TODO: Change this to your app or company name to customize the email sent.

/**
 * Sends a welcome email to new user.
 */
exports.sendReservationEmail = functions.https.onRequest(
  async (request, res) => {
    // cors(async (req: any, res: any) => {
    // console.log(req.query);
    await sendReservationEmail(
      request.query.to || "bsijok@gmail.com",
      request.query.people,
      request.query.time,
    );

    res.status(200).send();
    // });
  },
);

// Sends a welcome email to the given user.
async function sendReservationEmail(email: any, persons: any, time: any) {
  const mailOptions = {
    from: `Grill Lounge <noreply@firebase.com>`,
    to: email,
  } as any;

  // The user subscribed to the newsletter.
  mailOptions.subject = `Reservation pour ${persons}!`;
  mailOptions.text = `ويييين معكككككس \n`;
  mailOptions.text += `We have a reservation for ${time}`;
  await mailTransport.sendMail(mailOptions);
  functions.logger.log("New reservation email sent to:", email);
  return null;
}
