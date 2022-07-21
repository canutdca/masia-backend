import { Router, Request, Response } from 'express'
import { body, param } from 'express-validator'
import { validateReqSchema } from '.'
import container from '../dependency-injection'

export const register = (router: Router) => {

	const reqSchemaUserPost = [
		body('id').exists().isString(),
		body('name').isString().isLength({ min: 1 }),
	]
	const usersPostController = container.get('Apps.amongUs.controllers.KillsPostController')
	router.post('/kills', reqSchemaUserPost, validateReqSchema, (req: Request, res: Response) =>
		usersPostController.run(req, res))

	const killsGetController = container.get('Apps.amongUs.controllers.KillsGetController')
	router.get('/kills', (req: Request, res: Response) =>
		killsGetController.run(req, res))

	const reqSchemaKillsDelete = [ param('id').exists().isString() ]
	const killsDeleteController = container.get('Apps.amongUs.controllers.KillsDeleteController')
	router.delete('/kills/:id', reqSchemaKillsDelete, validateReqSchema, (req: Request, res: Response) =>
	killsDeleteController.run(req, res))
}
