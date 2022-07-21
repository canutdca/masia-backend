import { UserName } from './UserName'
import { AggregateRoot } from '../../../_shared/domain/AggregateRoot'
import { UserId } from '../../_shared/domain/users/UserId'
import { UserEmail } from './UserEmail'

export class User extends AggregateRoot {
	readonly id: UserId
	readonly name: UserName
	readonly email: UserEmail

	constructor(id: UserId, name: UserName, email: UserEmail) {
		super()
		this.id = id
		this.name = name
		this.email = email
	}

	static fromPrimitives(plainData: {
		id: string
		name: string
		email: string
	}): User {
		return new User(
			new UserId(plainData.id),
			new UserName(plainData.name),
			new UserEmail(plainData.email)
		)
	}

	toPrimitives(): any {
		return {
			id: this.id.value,
			name: this.name.value,
			email: this.email.value
		}
	}
}
