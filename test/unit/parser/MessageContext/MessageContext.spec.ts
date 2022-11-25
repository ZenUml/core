import {AsyncMessageContext} from '../Contexts'

describe('Messages', () => {
  it('Async Message', () => {
    const message = AsyncMessageContext('Alice -> Bob: Hello World')
    expect(message.getFormattedText()).toBe('Alice -> Bob: Hello World')
  })

  it('Async Message with Comment', () => {
    const message = AsyncMessageContext('// comment \nAlice -> Bob: Hello World')
    expect(message.getFormattedText()).toBe('Alice -> Bob: Hello World')
    expect(message.getComment()).toBe(' comment \n')
  })

  it('Async Message with multiline Comment', () => {
    const message = AsyncMessageContext('// comment1 \n// comment2 \nAlice -> Bob: Hello World')
    expect(message.getFormattedText()).toBe('Alice -> Bob: Hello World')
    expect(message.getComment()).toBe(' comment1 \n comment2 \n')
  })
})
