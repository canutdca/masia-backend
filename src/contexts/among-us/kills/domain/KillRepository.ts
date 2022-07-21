import { Kill } from './Kill'

export interface KillRepository {
	save(Kill: Kill): Promise<void>
}
