const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8890
const connectionString = "mongodb+srv://leticiafrancielle:teste123@appdatabase.sjsbjbi.mongodb.net/"
const Produto = require('./models/produto')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get("/listar-produtos", async (req, res) => {
    try {
        let produtos = await Produto.find()
        return res.status(200).json(produtos)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/adicionar-produto', async (req, res) => {
   
    let { nome, descricao, imagem, valor, categoria } = req.body

        let produto = {
            nome,
            descricao,
            imagem,
            valor,
            categoria
        }

    try {
        await Produto.create(produto)
        return res.status(201).json({ message: "Produto cadastrado com sucesso!" })
    } catch (error) {
        return res.status(500).json({ error: "Erro ao cadastrar produto." })
    }
})

mongoose.connect(connectionString, {
    dbName: "ECOMMERCE"
}).then(() => {
    console.log("MongoDb UP!")
    console.log(`Servidor rodando http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})
