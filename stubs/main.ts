import { getDirname } from '@poppinss/utils'
import { join } from 'node:path'

export const stubsRoot = join(getDirname(import.meta.url), 'stubs')
