import { KillId } from '../../_shared/domain/kills/KillId'
import { Kill } from './Kill'

export interface KillRepository {
	save(Kill: Kill): Promise<void>
	getAll(): Promise<Kill[]>
	delete(killId: KillId): Promise<void>
}
