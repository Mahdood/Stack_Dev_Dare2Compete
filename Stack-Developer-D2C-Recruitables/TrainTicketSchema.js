const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let schemaTrainTicket = new Schema({
  source: {
    type: String
  },
  destination: {
    type: String
  },
  price: {
    type: String
  }
});

module.exports = mongoose.model("trainticket", schemaTrainTicket);
