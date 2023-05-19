import { FastifyInstance } from 'fastify'

export async function statusServer(app: FastifyInstance) {
  app.get('/', (reply) => {
    return {
      status: 'OK',
    }
  })
}
