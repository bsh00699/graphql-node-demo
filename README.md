# graphql-node-demo
  该示例主要说明，如何将graphql应用在node服务生产环境中

## 背景
* 网上大多教程只是简单的介绍graphql的基本使用，但是将graphql应用到生产环境中的示例很少

## 特征
* 业务分离，根据不同的业务设计不同的schema
* 代码抽象，做到高内聚，低耦合, 易维护
* 与RESTful API实现隔离

## 说明
实际开发环境，未来的需求是越来越多的，我们要根据复杂业务需求，拆分出不同的逻辑代码，划分出多个
schema与resolve
#### Merging schema
```
const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs } = require('@graphql-tools/merge')

// we can merge multiple schemas
const typesArray = loadFilesSync(path.join(__dirname), {
  ignoreIndex: true
})

export default mergeTypeDefs(typesArray)
```
#### Merging resolver
```
const path = require('path')
const { mergeResolvers } = require('@graphql-tools/merge')
const { loadFilesSync } = require('@graphql-tools/load-files')

// we can merge multiple resolvers
const resolversArray = loadFilesSync(path.join(__dirname), {
  ignoreIndex: true
})

export default mergeResolvers(resolversArray)
```
#### 运行
在项目根目录执行以下命令，然后访问http://localhost:3000/graphql

```
npm install
npm run dev
```
#### 示例
```
query {
  app {
    name
  }
}

mutation {
  createApp(name: "appname") {
    name
  }
  createUser(name: "tom", phone: 123456) {
    name,
    phone
  }
}

```
#### 结果
```
{
  "data": {
    "app": {
      "name": "app-1"
    }
  }
}

{
  "data": {
    "createApp": {
      "name": "appname"
    },
    "createUser": {
      "name": "tom",
      "phone": 123456
    }
  }
}
```



