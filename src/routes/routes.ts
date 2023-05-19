import { FastifyInstance } from 'fastify'
import { getAll, createTask } from '../controllers/taskController'

export async function TaskRoutes(app: FastifyInstance) {
  app.get('/tasks', () => getAll())

  app.post('/tasks', (request) => createTask(request))
}
