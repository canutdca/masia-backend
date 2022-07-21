import { StringValueObject } from '../../../_shared/domain/value-objects/StringValueObject'

export class UserName extends StringValueObject {
	constructor(value: string) {
		super(value)
	}
}
