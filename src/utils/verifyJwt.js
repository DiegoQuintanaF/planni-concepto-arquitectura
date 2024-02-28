import jwt from 'jsonwebtoken'
import { env } from './config.js'
export const verifyJwt = async (token) => {
  try {
    const decodificado = jwt.verify(token, env.JWT_SECRET)
    console.log('asd')
    console.log('asd', decodificado)

    if (decodificado.id === '1') {
      return true
    }
    return false
  } catch {
    return false
  }
}
