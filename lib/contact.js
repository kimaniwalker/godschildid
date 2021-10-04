const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const sgMail = require('@sendgrid/mail')



export async function sendtextcode({ message, phone }) {


    try {
        client.messages
            .create({
                body: message,
                from: '+13375081810',
                to: phone
            })
            .then(text => {
                return text.sid
            })
            .catch((error) => {
                console.log(error.message)
            })
    } catch (error) {
        console.error('An unexpected error happened occurred:', error)
        
    }
}

export async function sendEmail({ to, subject, content }) {


    try {
        
        sgMail.setApiKey(process.env.SENDGRID)
        let msg = {
            to,
            "from": "no-reply-admin@godschildid.com",
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