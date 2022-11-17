import pino from 'pino';
import {prettyFactory} from '../pino-pretty-browser/index'
const pretty = prettyFactory({ sync: true, colorize: true, singleLine: true });

const logger = pino({
  level: 'debug',
  browser: {
    asObject: true,
    serialize: true,
    write: (inputData) => {
      const prettifiedOutput = pretty(inputData);
      console.log(prettifiedOutput);
      },
  }
});

export default logger;
