import { createController } from 'awilix-router-core' // or `awilix-router-core`

const api = ({ todoService }) => ({
  index: async ctx => (ctx.body = await todoService.all()),
  hello: async ctx => (ctx.body = 'hello world'),
  get: async ctx => (ctx.body = await todoService.get(ctx.params.id)),
  new: async ctx => (ctx.body = await todoService.add('new task'))
})

export default createController(api)
  .prefix('/todos') // Prefix all endpoints with `/todo`
  .get('', 'index')
  .get('/hello', 'hello')
  .get('/:id', 'get')
  .post('', 'new')