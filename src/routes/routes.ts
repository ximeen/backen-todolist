import { FastifyInstance } from 'fastify'
import { getAll, createTask, deleteTask } from '../controllers/taskController'

export async function TaskRoutes(app: FastifyInstance) {
  app.get('/tasks', () => getAll())

  app.post('/tasks', async (request, reply) => await createTask(request, reply))
  app.delete('/tasks/:id', (request, reply) => deleteTask(request, reply))
}
