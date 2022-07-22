import { NodeMailerSender } from "../../../../_shared/infrastructure/mailer/nodemailer/NodeMailerSender"
import { Lala, SendEmailInitGame } from "../../domain/SendEmailInitGame"

export class NodeMailerSendEmailInitGame extends NodeMailerSender implements SendEmailInitGame {

    sendEmailInitGame(payload: Lala) {
        this.sendEmail(
            payload.to,
            'Masia 2022',
            `<p>Hola ${payload.userName}! </br>` +
            `Tienes que matar a <b>${payload.objective}</b> de la siguiente manera:</p>` + 
            `<p style="padding-left: 1rem; padding-right: 1rem;"><i>${payload.kill}</i></p><br/>` +
            `<p>Tienes toda la información con las normas en: https://masia-app.herokuapp.com</p><br/><br/>` + 
            `Atentamente,<br/>La policía de la masía`
        )
    }
	
}