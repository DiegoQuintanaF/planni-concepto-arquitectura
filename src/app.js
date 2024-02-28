import express from 'express'
import helmet from 'helmet'
import { router } from './network/routes.js'
import { bootstrap } from './utils/bootstrap.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())

router(app)

bootstrap(app)
