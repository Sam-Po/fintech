const { Schema, model } = require('mongoose')

const Transactions = new Schema({
  card_name: {type: String}, 
  money_count: {type: Number},
  date_of_request: {type: Date}
})

module.exports = model('Transactions', Transactions)