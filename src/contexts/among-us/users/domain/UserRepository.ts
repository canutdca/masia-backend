import { UserId } from '../../_shared/domain/users/UserId'
import { User } from './User'

export interface UserRepository {
	getAll(): Promise<User[]>
	save(User: User): Promise<void>
	delete(killId: UserId): Promise<void>
}
