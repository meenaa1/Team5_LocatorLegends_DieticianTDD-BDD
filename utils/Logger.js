const winston = require('winston');
const path = require('path');
const fs = require('fs');

// Create logging directory if missing
const loggingDir = path.resolve(__dirname, '../logging');
if (!fs.existsSync(loggingDir)) {
  fs.mkdirSync(loggingDir, { recursive: true });
}

// Choose timezone
const timeZone = 'America/New_York'; 

// Log format
const customFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}] ${message}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({format: "YYYY-MM-DD HH:mm:ss" }),
    customFormat
  ),
  transports: [
    new winston.transports.Console({ level: 'debug' }),
    new winston.transports.File({
      filename: path.join(loggingDir, 'test_run.log'),
      maxFiles: 5,
      maxsize: 300 * 1024,
      level: 'info'
    }),
    new winston.transports.File({
      filename: path.join(loggingDir, 'test_error.log'),
      maxFiles: 5,
      maxsize: 10 * 1024,
      level: 'error'
    })
  ]
});

module.exports = logger;