test('Should set return value to mock function.', () => {
  const mockFunc = jest.fn()
  mockFunc.mockReturnValue('Mock return value')
  expect(mockFunc()).toBe('Mock return value')
})

test('Should set a return value in your mock function that will be returned only once.', () => {
  const mockFunc = jest.fn()
  mockFunc.mockReturnValueOnce('Mock return value once')
  expect(mockFunc()).toBe('Mock return value once')
  expect(mockFunc()).not.toBe('Mock return value once')
  expect(mockFunc()).toBe(undefined)
})

test('Should set the return value asynchronous in mock function.', async () => {
  const mockFunc = jest.fn()
  mockFunc.mockResolvedValue('Resolved value')
  const result = await mockFunc()
  expect(result).toBe('Resolved value')
})
