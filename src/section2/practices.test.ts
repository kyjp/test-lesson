import { ShoppingList } from "./practices"

describe('Practeces test', () => {
  let shoppingList: ShoppingList
  const item = 'test'
  beforeEach(() => {
    shoppingList = new ShoppingList()
  })
  test('A item should be added to list.', () => {
    shoppingList.addItem(item)
    expect(shoppingList.list).toEqual([item])
  })

  test('A item should be removed to list.', () => {
    shoppingList.addItem(item)
    shoppingList.removeItem(item)
    expect(shoppingList.list).toEqual([])
  })

  test('An error should be thrown when attempting to delete an item that does not exist.', () => {
    try {
      shoppingList.removeItem(item)
    } catch (error: any) {
      expect(error.message).toBe(`アイテム： ${item}は存在しません`)
    }
  })
})
