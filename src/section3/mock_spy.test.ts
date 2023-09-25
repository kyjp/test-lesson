import { Calcular } from './mock_spy'

test('Should call a sum method.', () => {
  const calcular = new Calcular()
  const sumSpy = jest.spyOn(calcular, 'sum')
  const result = calcular.sum(1, 2)
  expect(result).toBe(3)
  expect(sumSpy).toHaveBeenCalledTimes(1)
  expect(sumSpy).toHaveBeenCalledWith(1, 2)

  sumSpy.mockRestore()
})
