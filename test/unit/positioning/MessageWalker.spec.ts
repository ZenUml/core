import {MessageWalker} from "../../../src/positioning/MessageWalker";
let seqDsl = require('../../../src/parser/index');
const antlr4 = require('antlr4/index');

describe('MessageWalker', () => {
  it('can handle Message and Creation', () => {
    const code = `
    A.method
    new B
    `
    let rootContext = seqDsl.RootContext('A.method new B');
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT

    const messageWalker = new MessageWalker();
    walker.walk(messageWalker, rootContext);
    const ownedMessagesList = messageWalker.result();
    // expect first item's owner is A
    expect(ownedMessagesList[0].owner).toBe('A');
    // expect second item's owner is B
    expect(ownedMessagesList[1].owner).toBe('B');
  })
})
