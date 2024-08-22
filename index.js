const express = require('express')
const config = require ('./config')
const app = express()
const port = config.port
const mainClientsRouter = require ('./routers/clients/mainClientsRouter')

app.set ("views", "./views")
app.set ("view engine", "pug")


mainClientsRouter (app)

// test route
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
