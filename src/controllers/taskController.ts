import { z } from 'zod'
import { FastifyRequest } from 'fastify'
import { getAllTasks, createTaskDatabase } from '../models/tasksModel'

export function getAll() {
  const tasks = getAllTasks()
  return tasks
}

export function createTask(request: FastifyRequest) {
  const createTaskBodySchema = z.object({
    title: z.string().nonempty(),
    status: z.string(),
  })

  const requestData = createTaskBodySchema.parse(request.body)
  return createTaskDatabase(requestData)
}
