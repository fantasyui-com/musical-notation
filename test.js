#!/usr/bin/env node

const assert = require('assert');
const program = require('./index.js');

const result = program(`
[----][-x--][----][-x--]
[----][-x--][----][-x--]
[-x--][-x--][-x--][-x--]
[-x--][----][-x--][----]
[-x--][----][-x--][----]
`);


assert(result, []);
