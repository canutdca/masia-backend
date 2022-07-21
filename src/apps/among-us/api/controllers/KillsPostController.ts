import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { CreateKill } from '../../../../contexts/among-us/kills/application/CreateKill'
import { Controller } from './Controller'

export class KillsPostController implements Controller {
	
	constructor(private createKill: CreateKill) {}

	async run(req: Request, res: Response) {
		const { id, name } = req.body
		await this.createKill.run({id, name})

		res.status(httpStatus.OK).send()
	}
}
