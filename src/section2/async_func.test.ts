import {delay} from './async_func'

test('Return message after delay specified time.', async () => {
  const result = await delay('Hello Jest', 1000)
  expect(result).toBe('Hello Jest')
})

test('If time is negative, an error will occur.', async () => {
  try {
    const result = await delay('Hello Jest', -1)
  } catch (error: any) {
    expect(error.message).toBe('timeは0以上で確定してください')
  }
})
