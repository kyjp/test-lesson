import fs from 'fs'
import { readFile } from './mock_module'

jest.mock('fs')
const mockFs = jest.mocked(fs)
mockFs.readFileSync.mockReturnValue('dummy data')

test('Read file should return data.', () => {
  const result = readFile('path/dummy')
  expect(result).toBe('dummy data')
  expect(fs.readFileSync).toHaveBeenCalledTimes(1)
})