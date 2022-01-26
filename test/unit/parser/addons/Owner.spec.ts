import {Fixture} from '../fixture/Fixture'

describe('Owner', () => {
  it('for sync message', () => {
    const stat = Fixture.firstStatement('A.m');
    let message = stat.message();
    expect(message.Owner()).toBe('A');
  })

  it('for async message', () => {
    const stat = Fixture.firstStatement('B->A:m');
    let message = stat.asyncMessage();
    expect(message.Owner()).toBe('A');
  })

  it('for creation message', () => {
    const stat = Fixture.firstStatement('new A');
    let message = stat.creation();
    expect(message.Owner()).toBe('A');
  })
})
