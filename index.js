import Koa from 'koa'
import Router from 'koa-router'
// const Koa = require('koa')
// const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Service started on port ${PORT}`);
})