import { MongoRepository } from '../../../../_shared/infrastructure/persistence/mongo/MongoRepository'
import { KillId } from '../../../_shared/domain/kills/KillId'
import { Kill } from '../../domain/Kill'
import { KillRepository } from '../../domain/KillRepository'

interface KillDocument {
	_id: string
	name: string
}

export class MongoKillRepository extends MongoRepository<Kill> implements KillRepository {

	async getAll(): Promise<Kill[]> {
		const collection = await this.collection()
		const documents = await collection.find<KillDocument>({}).toArray()

		return documents.map(document =>
			Kill.fromPrimitives({ name: document.name, id: document._id }))
	}

	save(kill: Kill): Promise<void> {
		return this.persist(kill.id.value, kill)
	}

	async delete(killId: KillId) {
		this.remove(killId.value)
	}

	protected collectionName(): string {
		return 'Kills'
	}
}
