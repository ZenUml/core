import WidthProviderOnBrowser from "../../../src/positioning/WidthProviderFunc";
import {TextType} from "../../../src/positioning/Coordinate";

describe('WidthProviderOnBrowser', () => {
  it('should know the width of a string', () => {
    const width = WidthProviderOnBrowser('foo', TextType.MessageContent)
    expect(width).toBe(3)
  })
})
