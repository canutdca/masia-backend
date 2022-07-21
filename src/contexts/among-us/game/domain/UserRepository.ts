import { User } from './User'

export interface UserRepository {
	getAll(): Promise<User[]>
}
