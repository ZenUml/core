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
      // switch on inputData.level and map to console.log, console.warn, console.error, etc.
      // @ts-ignore
      switch (inputData.level) {
        case 10:
          console.trace(prettifiedOutput);
          break;
        case 20:
          console.debug(prettifiedOutput);
          break;
        case 30:
          console.info(prettifiedOutput);
          break;
        case 40:
          console.warn(prettifiedOutput);
          break;
        case 50:
        case 60:
          console.error(prettifiedOutput);
          break;
        default:
          console.log(prettifiedOutput);
      }
    },
  }
});

export default logger;
