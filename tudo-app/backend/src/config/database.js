const mongoose = require('mongoose')
mongoose.Promise = global.Promise //tirando mensagem de advertencia 
module.exports = mongoose.connect('mongodb://localhost/todo')