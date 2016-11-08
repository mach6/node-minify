#!/usr/bin/env node

// /Users/rodolphe/.nvm/versions/node/v6.9.1/bin/node-minify -c all -i lol.js -o lolo.js

var program = require('commander');
var cli = require('../lib/cli');
var pkg = require('../package.json');

program
  .version(pkg.version, '-v, --version')
  .option('-c, --compressor [compressor]', 'use the specified compressor [uglifyjs]', 'uglifyjs')
  .option('-i, --input [file]', 'input file path')
  .option('-o, --output [file]', 'output file path')
  .parse(process.argv);

//console.log(program);

var options = program.opts();

/**
 * Show meow help if missing mandatory.
 */

if (!options.compressor || !options.input || !options.output) {
  program.help();
}

cli(options);