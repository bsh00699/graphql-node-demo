export default {
  Query: {
    user: () => ({
      id: 1,
      name: 'tom',
      phone: 123456789
    })
  },
  Mutation: {
    createUser: (_, args) => {
      const { name, phone } = args
      return {
        id: 2,
        name,
        phone
      }
    }
  }
}