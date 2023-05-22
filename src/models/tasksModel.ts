import { FastifyReply } from 'fastify'
import { prisma } from './../lib/prisma'
interface TaskProps {
  title: string
  status: string
}

export async function getAllTasks() {
  const tasks = await prisma.tasks.findMany()
  return { tasks }
}

export async function createTaskDatabase({ title, status }: TaskProps) {
  const taskCreated = await prisma.tasks.create({
    data: {
      title,
      status,
    },
  })
  return taskCreated
}

export async function deleteTaskDatabase(id: string, reply: FastifyReply) {
  await prisma.tasks.delete({
    where: {
      id,
    },
  })

  return reply.status(202).send({ message: 'delete success' })
}
