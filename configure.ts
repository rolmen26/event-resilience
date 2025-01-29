import type Configure from '@adonisjs/core/commands/configure'

export async function configure(command: Configure) {
  const codemods = await command.createCodemods()

  await codemods.defineEnvVariables({ TEST_APP: 'test' })

  await codemods.updateRcFile((rcFile: any) => {
    rcFile.addCommand('event-resilience/commands')
  })
}
