import {WidthFunc} from "@/positioning/Coordinate";

let seqDsl = require('../../../../src/parser/index');

export class Fixture {
  static firstStatement(code: string) {
    let rootContext = seqDsl.RootContext(code);
    return rootContext.block().stat()[0];
  }
}

export let stubWidthProvider: WidthFunc = (text, _) => {
  const number = parseInt(text.substring(1) || '0');

  return isNaN(number) ? 0 : number;
};
