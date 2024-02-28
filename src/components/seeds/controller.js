import { db } from '../../db/index.js'

const users = [
  {
    id: 1,
    name: 'Diego',
    email: 'diego@email.com',
    password: '123456789'
  },
  {
    id: 2,
    name: 'Carlos',
    email: 'carlos@email.com',
    password: '0987654321'
  },
  {
    id: 3,
    name: 'Jesus',
    email: 'jesus@email.com',
    password: 'asdfghjjkl'
  }
]

const createSeeds = async (req, res) => {
  db.initTables()

  users.forEach(async (u) => {
    await db.createUser(u)
  })

  res.send('Init db')
}

export {
  createSeeds
}
