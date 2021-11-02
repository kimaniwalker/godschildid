const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const sgMail = require('@sendgrid/mail')



export async function sendtextcode({ message, phone }) {

    try {
        let text = await client.messages
            .create({
                body: message,
                from: '+12693904735',
                to: phone
            })
        console.log(text)
        return text.sid
    } catch (error) {
        console.log(error)
    }



}

export async function sendEmail({ to, subject, content }) {


    try {

        sgMail.setApiKey(process.env.SENDGRID)
        let msg = {
            to,
            "from": "support@godschildid.com",
            subject,
            html: `<h2>Gods Child IO</h2>
            <p><strong>${subject}</strong></p>
            <p>${content}</p>`
        }


        console.log(msg);

        let result = await sgMail.send(msg);
        return result
    } catch (error) {
        console.log(error)
    }





}