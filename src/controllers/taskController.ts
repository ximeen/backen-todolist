import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import {
  getAllTasks,
  createTaskDatabase,
  deleteTaskDatabase,
} from '../models/tasksModel'

export function getAll() {
  const tasks = getAllTasks()
  return tasks
}

export async function createTask(request: FastifyRequest, reply: FastifyReply) {
  const createTaskBodySchema = z.object({
    title: z.string().nonempty('title cannot be empty'),
    status: z.string(),
  })

  try {
    const data = createTaskBodySchema.parse(request.body)
    await createTaskDatabase(data)
    return reply.status(201).send({ data })
  } catch (error) {
    reply.status(400).send({ message: 'Bad request' })
  }
}

export async function deleteTask(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = paramsSchema.parse(request.params)
  await deleteTaskDatabase(id, reply)
}
