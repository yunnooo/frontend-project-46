#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command()

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish');
program.parse(process.argv);