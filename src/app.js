import express from 'express'
import helmet from 'helmet'
import YAML from 'yamljs'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import { router } from './network/routes.js'
import { bootstrap } from './utils/bootstrap.js'
import { corsOptions } from './utils/corsOptions.js'

const app = express()
const swaggerDocument = YAML.load(new URL('.', import.meta.url).pathname + 'swagger.yml')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))
app.use(helmet())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

router(app)

bootstrap(app)
