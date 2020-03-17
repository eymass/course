const winston = require('winston');

let date = new Date().toISOString();
const logFormat = winston.format.printf(function(info) {
  return `${date}-${info.level}: ${JSON.stringify(info.message, null, 4)}\n`;
});

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(winston.format.colorize(), logFormat),
    })
  ]
});
