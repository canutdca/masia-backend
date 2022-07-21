import { Router, Request, Response } from 'express'
import { body } from 'express-validator'
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
}
