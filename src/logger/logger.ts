import pino from 'pino';
import {write} from 'pino-pretty-browser'

const logger = pino({
  level: 'debug',
  browser: {
    asObject: true,
    serialize: true,
    write: write(),
  }
});

export default logger;
