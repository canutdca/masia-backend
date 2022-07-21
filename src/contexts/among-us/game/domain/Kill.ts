import { AggregateRoot } from '../../../_shared/domain/AggregateRoot'
import { KillId } from '../../_shared/domain/game/KillId'
import { KillName } from './KillName'

export class Kill extends AggregateRoot {
	readonly id: KillId
	readonly name: KillName

	constructor(id: KillId, kill: KillName) {
		super()
		this.id = id
		this.name = kill
	}

	static fromPrimitives(plainData: {
		id: string
		name: string
	}): Kill {
		return new Kill(
			new KillId(plainData.id),
			new KillName(plainData.name)
		)
	}

	toPrimitives(): any {
		return {
			id: this.id.value,
			name: this.name.value,
		}
	}
}
