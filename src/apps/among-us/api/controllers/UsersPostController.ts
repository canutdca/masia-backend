import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { CreateUser } from '../../../../contexts/among-us/users/application/CreateUser'
import { Controller } from './Controller'

export class UsersPostController implements Controller {
	
	constructor(private createUser: CreateUser) {}

	async run(req: Request, res: Response) {
		const { id, name, email } = req.body
		await this.createUser.run({id, name, email})

		res.status(httpStatus.OK).send()
	}
}
