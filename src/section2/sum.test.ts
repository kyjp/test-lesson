import { sum } from "./sum"


describe('sum test', () => {
  // test('Adding 1 and 2 should equal 3.', () => {
  //   expect(sum(1, 2)).toBe(3)
  // })

  // パラメタライズドテスト
  test.each`
    a | b | expected
    ${1} | ${2} | ${3}
    ${1} | ${-2} | ${-1}
  `('Adding ${a} and ${b} should equal ${expected}.', ({ a, b, expected }) => {
    expect(sum(a, b)).toBe(expected)
  })

  test('Adding 1 and 3 should not equal 3.', () => {
    expect(sum(1, 3)).not.toBe(3)
  })
})
