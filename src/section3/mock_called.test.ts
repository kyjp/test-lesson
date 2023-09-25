test('Should call a mock function.', () => {
  const mockFunc = jest.fn()
  mockFunc()
  expect(mockFunc).toHaveBeenCalled()
})

test('Mock function should be called twice.', () => {
  const mockFunc = jest.fn()
  mockFunc()
  mockFunc()
  expect(mockFunc).toHaveBeenCalledTimes(2)
})

test('Arguments should be passed to mock function.', () => {
  const mockFunc = jest.fn()
  mockFunc('hoge')
  expect(mockFunc).toHaveBeenCalledWith("hoge")
})
