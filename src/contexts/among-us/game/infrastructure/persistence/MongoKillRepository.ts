import { MongoRepository } from '../../../../_shared/infrastructure/persistence/mongo/MongoRepository'
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


	protected collectionName(): string {
		return 'Kills'
	}
}
