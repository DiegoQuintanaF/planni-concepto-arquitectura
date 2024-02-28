import { Router } from 'express'
import { getUser, createUser } from './controller.js'

const userRouter = Router()

userRouter.get('/:id', getUser)
userRouter.post('/', createUser)

export { userRouter }
