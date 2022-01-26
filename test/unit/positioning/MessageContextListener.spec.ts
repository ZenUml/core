import {MessageContextListener} from "../../../src/positioning/MessageContextListener";
let seqDsl = require('../../../src/parser/index');
const antlr4 = require('antlr4/index');

describe('MessageListener', () => {
  it('can handle Message and Creation', () => {
    const code = `
    A.method
    new B
    `
    let rootContext = seqDsl.RootContext(code);
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT

    const messageContextListener = new MessageContextListener();
    walker.walk(messageContextListener, rootContext);
    const ownedMessagesList = messageContextListener.result();
    // expect first item's owner is A
    expect(ownedMessagesList[0].owner).toBe('A');
    // expect second item's owner is B
    expect(ownedMessagesList[1].owner).toBe('B');
  })
})
