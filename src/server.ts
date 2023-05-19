import 'dotenv/config'
import fastify from 'fastify'
import { statusServer } from './routes/statusServer'
import { TaskRoutes } from './routes/routes'

const app = fastify()
app.register(statusServer)
app.register(TaskRoutes)

app.listen({ port: 3333 }).then(() => {
  console.log('👌HTTP server is running in http://localhost:3333')
})
