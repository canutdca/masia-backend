import { StringValueObject } from '../../../_shared/domain/value-objects/StringValueObject'

export class UserEmail extends StringValueObject {
	constructor(value: string) {
		super(value)
	}
}
