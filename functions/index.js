const functions = require("firebase-functions");
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
});

const sendContactForm = (form) => {
    return transport
        .sendMail({
            subject: '👾🤖Nuevo mensaje de SurveyUp business😎',
            bcc: ['rflores@surveyup.com.mx', 'brenda@fixter.org'],
            html: `<h3>¡Tienes un nuevo mensaje!</h3>
			<p> Nombre: ${form.name} </p>
            <p> empresa: ${form.company}  </p>
			<p> Correo: ${form.email} </p>
			<p> Teléfono: ${form.phone}  </p>
			<p>Mensaje: ${form.message} </p>
			`,
        })
        .then((r) => {
            console.log("Accepted => ", r.accepted)
            console.log("Rejected => ", r.rejected)
        })
        .catch((e) => console.log(e))
}

exports.contactForm = functions.https.onRequest((req, res) => {
    if (req.body.secret !== 'blissmo') return res.send('Missing token');
    sendContactForm(req.body)
    res.send("Sending email...");
});
