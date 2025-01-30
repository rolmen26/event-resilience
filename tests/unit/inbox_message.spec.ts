import { test } from '@japa/runner'
import InboxMessage from '../../src/shared/events/inbox/inbox_message.js'

test.group('InboxMessage Model', () => {
  test('database columns are configured correctly', async ({ assert }) => {
    const inboxMessage = new InboxMessage()
    inboxMessage.uuid = 'test-1'
    inboxMessage.handledBy = 'worker-1'

    assert.equal(inboxMessage.uuid, 'test-1')
    assert.equal(inboxMessage.handledBy, 'worker-1')
    assert.isUndefined(inboxMessage.handledAt)
  })
})
