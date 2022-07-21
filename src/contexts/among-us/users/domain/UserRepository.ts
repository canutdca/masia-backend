import { User } from './User'

export interface UserRepository {
	getAll(): Promise<User[]>
	save(User: User): Promise<void>
}
