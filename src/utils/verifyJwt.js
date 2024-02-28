import jwt from 'jsonwebtoken'
import { env } from './config.js'
export const verifyJwt = async (token) => {
  try {
    const decodificado = jwt.verify(token, env.JWT_SECRET)
    
    if (decodificado.id !== '1') {
      return false
    } 
    
    return false
   
  } catch {
    return false
  }
}
