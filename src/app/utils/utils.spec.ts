import { formatCurrency } from "./utils"

describe('formatCurrency', () => {
  it('should converts numbers to correct currency format', () => {
    expect(formatCurrency("10")).toEqual("$10.00")
    expect(formatCurrency("0")).toEqual("$0.00")
    expect(formatCurrency("8768680.677")).toEqual("$8,768,680.68")
    expect(formatCurrency("zakehjkh")).toBeUndefined()
  })
})