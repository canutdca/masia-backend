import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { GetUsers } from '../../../../contexts/among-us/users/application/GetUsers'
import { Controller } from './Controller'

export class UsersGetController implements Controller {
	
	constructor(private getUsers: GetUsers) {}

	async run(_: Request, res: Response) {
		const users = await this.getUsers.run()
        if (!users) {
            res.status(httpStatus.NO_CONTENT)
            return
        }
		res.status(httpStatus.OK).send(users)
	}
}
