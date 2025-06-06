const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  edad: { type: Number },
  fechaRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Data', dataSchema);