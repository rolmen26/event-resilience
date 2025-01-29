import { BaseCommand } from '@adonisjs/core/ace'

export default class Example extends BaseCommand {
  public static commandName = 'example'
  public static description = 'Ejemplo de comando'

  public async run() {
    this.logger.info('Comando ejecutado correctamente.')
  }
}
