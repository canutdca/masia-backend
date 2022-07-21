import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { GetKills } from '../../../../contexts/among-us/kills/application/GetKills'
import { Controller } from './Controller'

export class KillsGetController implements Controller {
	
	constructor(private getKills: GetKills) {}

	async run(_: Request, res: Response) {
		const kills = await this.getKills.run()
        if (!kills) {
            res.status(httpStatus.NO_CONTENT)
            return
        }
		res.status(httpStatus.OK).send(kills)
	}
}
