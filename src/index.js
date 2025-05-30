const connectDB = require('./config/db');
const { processCSV } = require('./services/csvProcessor');
const { saveToDatabase } = require('./services/databaseService');

const CSV_FILE_PATH = './data/ejemplo.csv';

const main = async () => {
  try {
    // 1. Conectar a la base de datos
    await connectDB();
    
    // 2. Procesar o convertir el archivo CSV a data para MongoDB
    const csvData = await processCSV(CSV_FILE_PATH);
    
    // 3. Guardar en MongoDB
    await saveToDatabase(csvData);
    
    console.log('Proceso completado exitosamente!');
    process.exit(0);
  } catch (error) {
    console.error('Error en el proceso principal:', error);
    process.exit(1);
  }
};

// Ejecutar
main();