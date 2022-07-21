import { UserId } from '../../_shared/domain/users/UserId'
import { UserRepository } from '../domain/UserRepository'
import { DeleteUserRequest } from './DeleteUserRequest'

export class DeleteUser {
	private readonly repository: UserRepository

	constructor(repository: UserRepository) {
		this.repository = repository
	}

	async run(request: DeleteUserRequest): Promise<void> {
		const userId = new UserId(request.id)
		await this.repository.delete(userId)
	}
}
