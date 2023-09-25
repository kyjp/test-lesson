import axios from "axios"
import Users from "./practices"

jest.mock('axios')
const mockAxios = jest.mocked(axios)

describe('Users test', () => {
  beforeEach(() => {
    mockAxios.get.mockClear()
  })
  test("Should return all user's data.", async () => {
    const users = [
      {
        user: 'asada',
        id: 1,
        email: 'asada@hoge.com'
      },
      {
        user: 'sakai',
        id: 2,
        email: 'sakai@hoge.com'
      },
      {
        user: 'komazawa',
        id: 3,
        email: 'komazawa@hoge.com'
      },
      {
        user: 'ohira',
        id: 4,
        email: 'ohira@hoge.com'
      }
    ]
    const resp = {data: users}
    mockAxios.get.mockResolvedValue(resp)
    const result = await Users.all()
    expect(result).toEqual(users)
    expect(mockAxios.get).toHaveBeenCalledWith('/users.json')
  })
})
