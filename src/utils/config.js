import 'dotenv/config'

export const env = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  STAGE: process.env.STAGE,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  HOST_API: process.env.HOST_API,
  JWT_SECRET: process.env.JWT_SECRET
}
