const mongoose = require('mongoose')

const pagamentoSchema = mongoose.Schema({
    descricao: { type: String, required: true },
    dataPagamento: { type: Date, required: true },
    tipoPagamento: { type: String, required: true },
    valorPagamento: { type: Number, required: true } 
})

const pagamento = mongoose.model('pagamento', pagamentoSchema)

module.exports = pagamento