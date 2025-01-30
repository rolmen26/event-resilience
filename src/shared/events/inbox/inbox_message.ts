import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class InboxMessage extends BaseModel {
  @column({ isPrimary: true })
  public id!: string

  @column()
  public uuid?: string

  @column()
  public eventType?: string

  @column()
  public payload?: Record<string, any>

  @column()
  public handledBy?: string

  @column.dateTime({ autoCreate: true })
  public createdAt?: DateTime

  @column.dateTime({ autoUpdate: true })
  public handledAt?: DateTime
}
