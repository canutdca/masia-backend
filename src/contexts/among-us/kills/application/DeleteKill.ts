import { KillId } from '../../_shared/domain/kills/KillId'
import { KillRepository } from '../domain/KillRepository'
import { DeleteKillRequest } from './DeleteKillRequest'

export class DeleteKill {
	private readonly repository: KillRepository

	constructor(repository: KillRepository) {
		this.repository = repository
	}

	async run(request: DeleteKillRequest): Promise<void> {
		const killId = new KillId(request.id)
		await this.repository.delete(killId)
	}
}
