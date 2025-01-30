import { test } from '@japa/runner'
import InboxMessage from '../../src/shared/events/inbox/inbox_message.js'
import { InboxMessageRepository } from '../../src/shared/events/inbox/inbox_repository.js'
import Sinon from 'sinon'

test.group('Inbox Message repository', (group) => {
  let inboxRepository: InboxMessageRepository

  group.each.setup(() => {
    inboxRepository = new InboxMessageRepository(InboxMessage)
  })

  group.each.teardown(() => {
    Sinon.restore()
  })

  test('it should create a new inbox message', async ({ assert }) => {
    const messageData = {
      uuid: '1234',
      eventType: 'user.created',
      payload: { name: 'John Doe' },
      handledBy: 'user.handler',
    }

    const createStub = Sinon.stub(InboxMessage, 'create').resolves(messageData as any)

    const message = await inboxRepository.create(messageData)

    Sinon.assert.calledOnce(createStub)
    assert.deepEqual(message, messageData)
  })

  test('it should check if an inbox message exists', async ({ assert }) => {
    const uuid = '1234'

    const count = { $extras: { total: 1 } }
    const queryStub = Sinon.stub(InboxMessage, 'query').returns({
      where: Sinon.stub().returnsThis(),
      count: Sinon.stub().resolves([count]),
    } as any)

    const exists = await inboxRepository.exists(uuid)

    Sinon.assert.calledOnce(queryStub)
    assert.isTrue(exists)
  })
})
