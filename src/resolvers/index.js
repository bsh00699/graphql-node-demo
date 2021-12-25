const path = require('path')
const { mergeResolvers } = require('@graphql-tools/merge')
const { loadFilesSync } = require('@graphql-tools/load-files')

// we can merge multiple resolvers
const resolversArray = loadFilesSync(path.join(__dirname), {
  ignoreIndex: true
})

export default mergeResolvers(resolversArray)