import { MongoRepository } from '../../../../_shared/infrastructure/persistence/mongo/MongoRepository'
import { User } from '../../domain/User'
import { UserRepository } from '../../domain/UserRepository'

interface UserDocument {
	_id: string
	name: string
	email: string
}

export class MongoUserRepository extends MongoRepository<User> implements UserRepository {

	async getAll(): Promise<User[]> {
		const collection = await this.collection()
		const documents = await collection.find<UserDocument>({}).toArray()

		return documents.map(document =>
			User.fromPrimitives({ name: document.name, id: document._id, email: document.email }))
	}

	protected collectionName(): string {
		return 'Users'
	}
}
