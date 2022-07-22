import { UserId } from '../../_shared/domain/users/UserId'
import { User } from '../domain/User'
import { UserEmail } from '../domain/UserEmail'
import { UserName } from '../domain/UserName'
import { UserRepository } from '../domain/UserRepository'
import { CreateUserRequest } from './CreateUserRequest'

export class CreateUser {
	private readonly repository: UserRepository

	constructor(repository: UserRepository) {
		this.repository = repository
	}

	async run(request: CreateUserRequest): Promise<void> {
		const user = new User(
			new UserId(request.id),
			new UserName(request.name),
			new UserEmail(request.email)
		)
		await this.repository.save(user)
	}
}
