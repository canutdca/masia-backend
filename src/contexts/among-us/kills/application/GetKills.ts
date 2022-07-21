import { KillRepository } from '../domain/KillRepository'
import { GetKillsResponse } from './GetKillsResponse'

export class GetKills {
	private readonly repository: KillRepository

	constructor(repository: KillRepository) {
		this.repository = repository
	}

	async run(): Promise<GetKillsResponse[]> {
		const kills = await this.repository.getAll()
		return kills.map(kill => ({
			id: kill.id.value,
			name: kill.name.value,
		}))
	}
}
