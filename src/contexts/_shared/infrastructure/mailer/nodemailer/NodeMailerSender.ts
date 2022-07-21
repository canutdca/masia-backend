import NodeMailerConfig from './NodeMailerConfig'
// import nodemailer from 'nodemailer'

const senderEmail = 'youremail@gmail.com'

export abstract class NodeMailerSender{
    // private readonly transporter: any
    
	constructor(private config: NodeMailerConfig) {
        // this.transporter = nodemailer.createTransport({
        //     service: this.config.service,
        //     auth: {
        //       user: this.config.auth.user,
        //       pass: this.config.auth.pass
        //     }
        // });
        console.log(this.config)
    }

	protected sendEmail(to: string, subject: string, html: string) {
        const mailOptions = {
            from: senderEmail,
            to,
            subject,
            html
        };
    
        // transporter.sendMail(mailOptions, function(error, info){
        //     if (error) {
        //       console.log(error);
        //     } else {
        //       console.log('Email sent: ' + info.response);
        //     }
        // });
    
        console.log(mailOptions)
    }
}