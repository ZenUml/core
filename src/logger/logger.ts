import pino from 'pino';

const logger = pino({
  level: 'debug',
  prettyPrint: {
    colorize: true,
  },
  browser: {
    asObject: true,
    serialize: true
  }
});

export default logger;