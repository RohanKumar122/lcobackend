const fs = require('fs');

function logRequestBody(requestBody) {
  const logData = `${new Date().toISOString()}: ${JSON.stringify(requestBody)}\n`;

  fs.appendFile('request.log', logData, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
}

module.exports = logRequestBody;