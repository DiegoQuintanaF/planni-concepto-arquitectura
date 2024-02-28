import { Router } from 'express'
import { userRouter } from '../components/users/network.js'
import { seedRouter } from '../components/seeds/network.js'
import { onlyAdmin } from '../middleware/auth.js'

export const router = (app) => {
  const router = Router()
  router.use('/users', onlyAdmin, userRouter)
  router.use('/seeds', seedRouter)

  app.use('/api/v1', router)
}
