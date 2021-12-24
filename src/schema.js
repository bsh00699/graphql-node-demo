import { makeExecutableSchema, mergeSchemas } from '@graphql-tools/schema'

const typeDefs = `
  type User {
    id: ID!
    name: String
    phone: Int
  }

  type Query {
    user: User
  }
`

const resolvers = {
  Query: {
    user: () => ({
      id: 1,
      name: 'tom',
      phone: 123456789
    })
  }
}

// 将类型与解析器融合成schema
export default makeExecutableSchema({
  typeDefs,
  resolvers
})