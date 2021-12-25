export default {
  Query: {
    app: () => ({
      id: 1,
      name: 'app-1',
      status: 'runing'
    })
  },
  Mutation: {
    createApp: (_, args) => {
      const { name } = args
      return {
        id: 2,
        name,
        status: 'pending'
      }
    }
  }
}