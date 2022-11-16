import pino from 'pino';

const logger = pino({
  level: 'debug',
  browser: {
    asObject: true,
    serialize: true
  }
});

export default logger;
