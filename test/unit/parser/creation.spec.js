import {Fixture} from "./fixture/Fixture";

describe('message - creation', () => {
  test('A.m', () => {
    let message = Fixture.firstStatement('new A').creation();
    expect(message.SignatureText()).toBe('«create»');
  })
})
