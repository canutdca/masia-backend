import { KillId } from '../../_shared/domain/kills/KillId'
import { Kill } from '../domain/Kill'
import { KillName } from '../domain/KillName'
import { KillRepository } from '../domain/KillRepository'
import { CreateKillRequest } from './CreateKillRequest'

export class CreateKill {
	private readonly repository: KillRepository

	constructor(repository: KillRepository) {
		this.repository = repository
	}

	async run(request: CreateKillRequest): Promise<void> {

		console.log(request)
		const kill = new Kill(
			new KillId(request.id),
			new KillName(request.name),
		)
		await this.repository.save(kill)
	}
}
