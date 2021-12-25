const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs } = require('@graphql-tools/merge')

// we can merge multiple schemas
const typesArray = loadFilesSync(path.join(__dirname), {
  ignoreIndex: true
})

export default mergeTypeDefs(typesArray)