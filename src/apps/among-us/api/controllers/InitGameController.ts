import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { InitGame } from '../../../../contexts/among-us/game/application/InitGame'
import { Controller } from './Controller'

export class InitGameController implements Controller {
	
	constructor(private initGame: InitGame) {}

	async run(_: Request, res: Response) {
		await this.initGame.run()
		res.status(httpStatus.OK).send()
	}
}
