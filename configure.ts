import type Configure from '@adonisjs/core/commands/configure'
import { stubsRoot } from './stubs/main.js'
import { Codemods } from '@adonisjs/core/ace/codemods'

export async function configure(command: Configure) {
  const codemods = await command.createCodemods()

  await codemods.defineEnvVariables({ TEST_APP: 'test' })

  await codemods.updateRcFile((rcFile: any) => {
    rcFile.addCommand('event-resilience/commands')
  })

  await generateMigration(command, codemods, 'create_example_table')

  command.logger.info('Migration created successfully')
}

async function generateMigration(command: Configure, codemods: Codemods, name: string) {
  const stubPath = `database/migrations/${name}.stub`
  const prefix = new Date().getTime()
  await codemods.makeUsingStub(stubsRoot, stubPath, {
    filePath: command.app.migrationsPath(`${prefix}_${name}.ts`),
  })
}
