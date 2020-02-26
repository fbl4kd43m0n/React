const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express() // Instanciando o Express

// Middlewares
server.use(bodyParser.urlencoded({ extended: true})) // Para toda requisição que chegar utilize o bodyparser urlencoded para interpretá-las
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})