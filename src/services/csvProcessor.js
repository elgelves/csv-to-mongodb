const fs = require('fs');
const csv = require('csv-parser');

const processCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(`CSV procesado correctamente. ${results.length} registros leídos.`);
        resolve(results);
      })
      .on('error', (error) => {
        console.error('Error procesando CSV:', error);
        reject(error);
      });
  });
};

module.exports = { processCSV };