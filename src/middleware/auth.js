import { response } from '../network/response.js'
import { verifyJwt } from '../utils/verifyJwt.js'

export const onlyAdmin = async (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    const hasAuth = await verifyJwt(token)
    if (hasAuth) return next()
  }

  return response.error(res, 'Unauthorized', 401)
}
