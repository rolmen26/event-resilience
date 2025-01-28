import 'reflect-metadata'
import { configure, processCLIArgs, run } from '@japa/runner'
import { assert } from '@japa/assert'
import { expectTypeOf } from '@japa/expect-type'

processCLIArgs(process.argv.slice(2))

configure({
  files: ['tests/**/*.spec.ts'],
  plugins: [assert(), expectTypeOf()],
})

run()
