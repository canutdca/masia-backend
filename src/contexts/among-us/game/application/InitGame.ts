import { Kill } from '../domain/Kill'
import { KillRepository } from '../domain/KillRepository'
import { SendEmailInitGame } from '../domain/SendEmailInitGame'
import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'
import { shuffle } from './Shuffle.utils'

export class InitGame {
	private readonly userRepository: UserRepository
	private readonly killRepository: KillRepository
	private readonly mailer: SendEmailInitGame

	constructor(
		userRepository: UserRepository,
		killRepository: KillRepository,
		mailer: SendEmailInitGame
	) {
		this.userRepository = userRepository
		this.killRepository = killRepository
		this.mailer = mailer
	}

	async run(): Promise<void> {
		const [users, kills] = await Promise.all([
			this.userRepository.getAll(),
			this.killRepository.getAll()
		])

		const randomizeUsers = shuffle<User>(users)
		const randomizeKills = shuffle<Kill>(kills)


		for (let index = 0; index < randomizeUsers.length; index++) {
			const user = randomizeUsers[index];
			const objective = index === randomizeUsers.length - 1
				? randomizeUsers[0].name
				: randomizeUsers[index + 1].name
			
			this.mailer.sendEmailInitGame({
				to: user.email.value,
				userName: user.name.value,
				kill: randomizeKills[index].name.value,
				objective: objective.value,
			})
		}

	}
}
