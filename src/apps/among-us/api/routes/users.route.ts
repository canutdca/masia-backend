import { Router, Request, Response } from 'express'
import { body, param } from 'express-validator'
import { validateReqSchema } from '.'
import container from '../dependency-injection'

export const register = (router: Router) => {

	const reqSchemaUserPost = [
		body('id').exists().isString(),
		body('name').isString().isLength({ min: 1 }),
		body('email').exists().isEmail()
	]
	const usersPostController = container.get('Apps.amongUs.controllers.UsersPostController')
	router.post('/users', reqSchemaUserPost, validateReqSchema, (req: Request, res: Response) =>
		usersPostController.run(req, res))

	const usersGetController = container.get('Apps.amongUs.controllers.UsersGetController')
	router.get('/users', (req: Request, res: Response) =>
		usersGetController.run(req, res))

	const reqSchemaUsersDelete = [ param('id').exists().isString() ]
	const usersDeleteController = container.get('Apps.amongUs.controllers.UsersDeleteController')
	router.delete('/users/:id', reqSchemaUsersDelete, validateReqSchema, (req: Request, res: Response) =>
	usersDeleteController.run(req, res))
}
