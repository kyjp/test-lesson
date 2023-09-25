describe('Tests on array', () => {
  test('Should be able to add elements to the array.', () => {
    const array = []
    array.push('element')
    expect(array).toEqual(['element'])
  })
  test('The length of the array should be correct.', () => {
    const array = ['element1', 'element2']
    expect(array.length).toBe(2)
  })

  describe('Tests for searching arrays', () => {
    test('Should be able to search the elements of the array', () => {
      const array = [
        'elemnt1',
        'element2'
      ]
      expect(array.indexOf('element2')).toBe(1)
     })
  })
})
