const mongoose = require('mongoose')
mongoose.Promise = global.Promise // Usando a API de Promise do Node 
module.exports = mongoose.connect('mongodb://localhost/mymoney')