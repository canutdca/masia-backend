// import convict from 'convict'
const convict = require('convict')
const coreConfig = convict({
	env: {
		doc: 'The application environment.',
		format: ['production', 'development', 'staging', 'test'],
		default: 'default',
		env: 'NODE_ENV'
	},
	mongo: {
		url: {
			doc: 'The Mongo connection URL',
			format: String,
			env: 'MONGO_URL',
			// default: 'mongodb://localhost:27017/among-us-dev'
			default: 'mongodb+srv://masia2022:2022masia@cluster0.raxigye.mongodb.net/?retryWrites=true&w=majority'
		}
	},
	nodemailer: {
		service: 'google',
		auth: {
			user: 'user',
			pass: 'pass'
		}
	}
})

coreConfig.loadFile([__dirname + '/default.json', __dirname + '/' + coreConfig.get('env') + '.json'])

export default coreConfig
