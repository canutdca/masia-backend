import config from '../../config'
import NodeMailerConfig from '../../../../../_shared/infrastructure/mailer/nodemailer/NodeMailerConfig'

const nodeMailerConfig = {
	service: config.get('nodemailer.service'),
	auth: config.get('nodemailer.auth')
}

export class NodeMailerConfigFactory {
	static createConfig(): NodeMailerConfig {
		console.log('asdasdasdasd', nodeMailerConfig)
		return nodeMailerConfig
	}
}
