import { MongoRepository } from '../../../../_shared/infrastructure/persistence/mongo/MongoRepository'
import { Kill } from '../../domain/Kill'
import { KillRepository } from '../../domain/KillRepository'

// interface KillDocument {
// 	_id: string
// 	name: string
// }

export class MongoKillRepository extends MongoRepository<Kill> implements KillRepository {

	save(kill: Kill): Promise<void> {
		return this.persist(kill.id.value, kill)
	}

	protected collectionName(): string {
		return 'Kills'
	}
}
