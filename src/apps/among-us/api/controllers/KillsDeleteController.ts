import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { DeleteKill } from '../../../../contexts/among-us/kills/application/DeleteKill'
import { Controller } from './Controller'

export class KillsDeleteController implements Controller {
	
	constructor(private deleteKill: DeleteKill) {}

	async run(req: Request, res: Response) {
		const { id } = req.params
		await this.deleteKill.run({id})

		res.status(httpStatus.OK).send()
	}
}
