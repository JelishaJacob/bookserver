require('dotenv').config()

const express = require('express')

const server = express()
const router = require('./router/router')
const cors = require('cors')


server.use(cors())
server.use(express.json())
server.use(router)


require('./connections')

const port = 5000 || process.env.port
server.listen(port, () => {
    console.log(`____________server started at port number ${port}____________`);
})