import { Router } from 'express'
import { createSeeds } from './controller.js'

const seedRouter = Router()

seedRouter.get('/', createSeeds)

export { seedRouter }
