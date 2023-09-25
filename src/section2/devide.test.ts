// toThrow 関数がエラーをスルーするか検証
import { divide, ZeroDivisorError } from "./devide"

test('Diving 0 should is a error occurs', () => {
  expect(() => divide(10, 0)).toThrow()
  expect(() => divide(10, 0)).toThrow('0で割ることはできません')
  expect(() => divide(10, 0)).toThrow(ZeroDivisorError)
})
