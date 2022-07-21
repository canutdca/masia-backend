import { MongoRepository } from '../../../../_shared/infrastructure/persistence/mongo/MongoRepository'
import { UserId } from '../../../_shared/domain/users/UserId'
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

	async getSingle(id: UserId): Promise<User | null> {
		const collection = await this.collection()
		const document = await collection.findOne<UserDocument>({ _id: id.value })

		if (!document) return null

		return User.fromPrimitives({ name: document.name, id: document._id, email: document.email })
	}

	save(user: User): Promise<void> {
		return this.persist(user.id.value, user)
	}

	protected collectionName(): string {
		return 'Users'
	}
}
