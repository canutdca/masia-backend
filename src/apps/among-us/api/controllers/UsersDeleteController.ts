import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { DeleteUser } from '../../../../contexts/among-us/users/application/DeleteUser'
import { Controller } from './Controller'

export class UsersDeleteController implements Controller {
	
	constructor(private deleteUser: DeleteUser) {}

	async run(req: Request, res: Response) {
		const { id } = req.params
		await this.deleteUser.run({id})

		res.status(httpStatus.OK).send()
	}
}
