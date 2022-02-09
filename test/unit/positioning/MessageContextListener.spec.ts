import {MessageContextListener} from "../../../src/positioning/MessageContextListener";
let seqDsl = require('../../../src/parser/index');
const antlr4 = require('antlr4/index');

describe('MessageListener', () => {
  it('can handle Message and Creation', () => {
    const code = `
    A.method
    new B
    C->D: message
    `
    let rootContext = seqDsl.RootContext(code);
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT

    const messageContextListener = new MessageContextListener();
    walker.walk(messageContextListener, rootContext);

    expect(messageContextListener.result()).toStrictEqual(
      [
        {"from": "_STARTER_", "signature": "method", "to": "A", "type": 0},
        {
          "from": "_STARTER_",
          "signature": "«create»",
          "to": "B",
          "type": 2
        },
        {"from": "C", "signature": " message", "to": "D", "type": 1}]);
  })
})
