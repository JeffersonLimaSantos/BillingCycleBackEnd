const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.require = "O atributo '{PATH}' é Obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é mair que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido para o atribuo '{PATH}'."