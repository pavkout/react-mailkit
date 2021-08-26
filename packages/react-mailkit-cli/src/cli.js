#!/bin/env node

import fs from 'fs'
import program from 'commander'
import mjml2json from 'mjml2json'
import { json2xml } from './mailkit'
import { version } from '../package.json'

program.version(version).usage('<input-file> <output-file>').parse(process.argv)

if (program.args.length !== 2) {
  program.outputHelp()
  process.exit(1)
}

const [inputFilename, outputFilename] = program.args

const input = fs.readFileSync(inputFilename, 'utf8')
const json = mjml2json(input)
const output = json2xml(json)

fs.writeFileSync(outputFilename, output)

console.log(`${inputFilename} was converted to JSON format in ${outputFilename}`) // eslint-disable-line no-console
