const express = require("express")
const { resolve } = require("path")
const logger = require("morgan")

const port = Number.isNaN(Number(process.env.PORT)) ? 3000 : Number(process.env.PORT)

const app = express()

app.use(logger('dev'))

const STATIC = resolve(__dirname, './app')
const INDEX = resolve(STATIC, 'index.html')

const sendIndex = (_, res) => {
  res.header({ 'cache-control': 'no-store,max-age=0' }).sendFile(INDEX)
}

app.get('/', sendIndex)
app.get('/index.html', sendIndex)
app.use(express.static(STATIC, { cacheControl: true, maxAge: '4w' }))
app.get('*', sendIndex)

app.listen(port, () => { console.log(`Listening on ${port}`) })
