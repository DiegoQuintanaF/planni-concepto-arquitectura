import { db } from '../../db/index.js'
import { response } from '../../network/response.js'
import { UserSchema } from '../../schemas/user.js'
import { safeParse } from 'valibot'

export const getUser = async (req, res) => {
  const { id } = req.params

  const responseDB = await db.getUser(id)

  if (responseDB.length === 0) {
    return response.error(res, 'User not found', 404)
  }

  return response.success(res, 'Get user success', responseDB, 200)
}

export const createUser = async (req, res) => {
  const { name, email, password } = req.body

  const user = {
    name,
    email,
    password
  }

  const isValid = safeParse(UserSchema, user)

  if (isValid.issues) {
    const errors = isValid.issues.map((issue) => {
      return {
        key: issue.path[0].key,
        message: issue.message
      }
    })

    return response.error(res, {
      message: 'Invalid data',
      errors
    }, 400)
  }

  const responseDB = await db.createUser(user)
  if (responseDB.error) {
    return response.error(res, responseDB.error, 400)
  }
  return response.success(res, 'Create user success', responseDB, 201)
}
