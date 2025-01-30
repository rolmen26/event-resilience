import { inject } from '@adonisjs/core'
import InboxMessage from './inbox_message.js'

@inject()
export class InboxMessageRepository {
  constructor(private model: typeof InboxMessage) {}

  public async create(messageData: {
    uuid: string
    eventType: string
    payload: Record<string, any>
    handledBy: string
  }) {
    return await this.model.create(messageData)
  }

  public async exists(uuid: string) {
    const count = await this.model.query().where('uuid', uuid).count('* as total')

    return Number(count[0].$extras.total) > 0
  }
}
