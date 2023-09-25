// toBe Object.isと同等の比較が行われる
test('Numerical tests', () => {
  expect(2 + 2).toBe(4)
})
test('String tests', () => {
  expect('Jest').toBe('Jest')
})
test('Boolean tests', () => {
  expect(true).toBe(true)
})

// toEqual Objectや配列の比較に使用する
test('Array test', () => {
  const arrA = [1, 2, 3]
  const arrB = [1, 2, 3]
  expect(arrA).toEqual(arrB)
})

test('Object test', () => {
  const objA = {
    a: 1,
    b: 2
  }
  const objB = {
    a: 1,
    b: 2
  }
  expect(objA).toEqual(objB)
})

// not 判定を反転
it('Adding 2 and 2 should not equal 5.', () => {
  expect(2 + 2).not.toBe(5)
})
