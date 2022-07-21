import { UserRepository } from '../domain/UserRepository'
import { GetUsersResponse } from './GetUsersResponse'

export class GetUsers {
	private readonly repository: UserRepository

	constructor(repository: UserRepository) {
		this.repository = repository
	}

	async run(): Promise<GetUsersResponse[]> {
		const users = await this.repository.getAll()
		return users.map(user => ({
			id: user.id.value,
			name: user.name.value,
			email: user.email.value
		}))
	}
}
