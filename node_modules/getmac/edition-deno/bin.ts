#!/usr/bin/env node
import getMAC from './index.ts'
import { networkInterfaces } from 'https://deno.land/std/node/os.ts'
try {
	console.log(getMAC(process.argv[2]))
} catch (err) {
	console.error(networkInterfaces())
	throw err
}
