import Koa from 'koa'
import Router from 'koa-router'
import { graphqlHTTP } from 'koa-graphql'
import schema from './src/index'

const app = new Koa()
const router = new Router()
router.all('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.use(router.routes(), router.allowedMethods())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Service started on port ${PORT}`);
})