import 'express-async-errors'
import express from 'express'
import { routes } from './routes/index.js'
import { AppError } from './utils/AppError.js'

const app = express()

app.use(express.json())

app.use(routes)

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }

  console.error(error)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  })
})

const PORT = 3333
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
