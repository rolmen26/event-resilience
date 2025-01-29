import { test } from '@japa/runner'

test.group('Unit test', (group) => {
  group.setup(() => {})

  test('it should return true', ({ assert }) => {
    assert.isTrue(true)
  })
})
