const express = require("express")
const { resolve } = require("path")
const logger = require("morgan")

const port = Number.isNaN(Number(process.env.PORT)) ? 3000 : Number(process.env.PORT)

const app = express()

app.use(logger('dev'))

const STATIC = resolve(__dirname, './app')
const INDEX = resolve(STATIC, 'index.html')
app.use(express.static(STATIC))
app.get('*', (_, res) => {
  res.sendFile(INDEX)
})

app.listen(port, () => { console.log(`Listening on ${port}`) })
