import NodeMailerConfig from './NodeMailerConfig'
import nodemailer from 'nodemailer'

const senderEmail = 'youremail@gmail.com'

export abstract class NodeMailerSender{
    private readonly transporter: any
    
	constructor() {
        const config: NodeMailerConfig = {
            service: 'gmail',
            auth: {
                user: 'masiaolot2022@gmail.com',
                pass: 'yjiknddehlawityn'
            }
        }
        this.transporter = nodemailer.createTransport({
            service: config.service,
            auth: {
              user: config.auth.user,
              pass: config.auth.pass
            }
        });
        console.log(config)
    }

	protected sendEmail(to: string, subject: string, html: string) {
        const mailOptions = {
            from: senderEmail,
            to,
            subject,
            html
        };
    
        this.transporter.sendMail(mailOptions, function(error: any, info: any){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
    
        console.log(mailOptions)
    }
}