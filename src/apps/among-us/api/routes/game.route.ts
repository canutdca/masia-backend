import { Router, Request, Response } from 'express'
import container from '../dependency-injection'

export const register = (router: Router) => {
	const gamePostController = container.get('Apps.amongUs.controllers.InitGameController')
	router.post('/game', (req: Request, res: Response) =>
	gamePostController.run(req, res))
}
