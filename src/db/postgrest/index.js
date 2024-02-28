import pkg from 'pg'
import { env } from '../../utils/config.js'

const client = new pkg.Client({
  user: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  host: env.DB_HOST,
  port: env.DB_PORT,
  database: env.DB_NAME
})

const connect = async () => {
  await client.connect()
  console.log('[db] Connected to database')
}

const createUser = async (user) => {
  const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *'
  const values = [user.name, user.email, user.password]
  try {
    const { rows } = await client.query(query, values)
    return rows
  } catch (error) {
    if (error.code === '23505') {
      return {
        error: error.detail
      }
    }
    return {
      error: 'Internal server error'
    }
  }
}

const getUser = async (id) => {
  const query = 'SELECT * FROM users WHERE id = $1'
  const values = [id]
  const { rows } = await client.query(query, values)
  return rows
}

let isDbInitialized = false

const initTables = async () => {
  if (isDbInitialized) {
    return
  }

  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL
    )
  `
  await client.query(query)
  isDbInitialized = true
}

export const db = {
  connect,
  createUser,
  getUser,
  initTables
}
