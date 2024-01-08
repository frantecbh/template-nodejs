// no maximo 5 metodos

import { AppError } from '../utils/AppError.js'

class UsersControllers {
  async create(request, response) {
    const { name, email, password } = request.body

    if (!name) {
      throw new AppError('Nome é obrigatório')
    }

    return response.status(201).send({
      name,
      email,
      password,
    })
  }
}

export { UsersControllers }
