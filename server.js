
const mongoose = require('mongoose')

require('dotenv').config({path:'variables.env'})

//Conexão ao Banco de Dados
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true })
mongoose.Promise = global.Promise
mongoose.connection.on('error', () => {
    console.error("Erro: "+ error.message)
})

//Carregando todos models
require('./models/Post')

const app = require('./app')

app.set('port', process.env.PORT || 7777)
const server = app.listen(app.get('port'),()=> {
    console.log(`Servidor rodando na porta ${server.address().port}`)
})