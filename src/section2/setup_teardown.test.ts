// beforeEach 各テストごとに実行
// afterEach 各テストの後に実行

// beforeAll グループ内の全てのテスト、もしくはファイル内の全てのテストの前に一度だけ実行される
// afterAll グループ内の全てのテスト、もしくはファイル内の全てのテストの前に一度だけ実行される

describe('outer describe block', () => {
  beforeAll(() => {
    console.log('outer beforeAll')
  })
  afterAll(() => {
    console.log('outer afterAll')
  })
  beforeEach(() => {
    console.log('outer beforeEach')
  })
  afterEach(() => {
    console.log('outer afterEach')
  })
  test('outer test1', () => {
    console.log('outer test1')
  })
  test('outer test2', () => {
    console.log('outer test2')
  })
  describe('inner desctibe block', () => {
    beforeAll(() => {
      console.log('inner beforeAll')
    })
    afterAll(() => {
      console.log('inner afterAll')
    })
    beforeEach(() => {
      console.log('inner beforeEach')
    })
    afterEach(() => {
      console.log('inner afterEach')
    })
    test('inner test 1', () => {
      console.log('inner test1')
    })
    test('inner test 2', () => {
      console.log('inner test2')
    })
  })
})
