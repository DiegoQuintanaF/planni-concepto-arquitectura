import { db } from '../db/index.js'
import { env } from './config.js'

const bootstrap = async (app) => {
  console.log('[bootstrap] Starting server...')
  await db.connect()

  app.listen(env.PORT, () => {
    console.log(`[bootstrap] Server listening on ${env.HOST_API}`)
  })
}

export { bootstrap }
