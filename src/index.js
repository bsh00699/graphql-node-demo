import { makeExecutableSchema } from '@graphql-tools/schema'
import typeDefs from './schemas/index'
import resolvers from './resolvers/index'

// 将类型与解析器融合成schema
export default makeExecutableSchema({
  typeDefs,
  resolvers
})