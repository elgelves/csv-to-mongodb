const Data = require('../models/dataModel');

const saveToDatabase = async (data) => {
  try {
    // Insertar todos los documentos a la vez
    await Data.deleteMany({}); // para borrar datos historicos
    const result = await Data.insertMany(data, { ordered: false });
    console.log(`${result.length} documentos insertados correctamente`);
    return result;
    
  } catch (error) {
    console.error('Error guardando datos:', error.message);
    throw error;
  }
};

module.exports = { saveToDatabase };