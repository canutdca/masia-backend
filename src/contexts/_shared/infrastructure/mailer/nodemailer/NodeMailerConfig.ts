interface NodeMailerConfig {
	service: string,
	auth: Auth
}

interface Auth {
	user: string
	pass: string
}

export default NodeMailerConfig
