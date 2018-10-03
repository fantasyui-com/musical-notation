#!/usr/bin/env node

const assert = require('assert');
const program = require('./index.js');

const input = `
  [----][-x--][----][-x--]
  [----][-x--][----][-x--]
  [-x--][-x--][-x--][-x--]
  [-x--][----][-x--][----]
  [-x--][----][-x--][----]
`; // note it is sloppy on purpose

const actual = program(input);
const expected = [
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
  [ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ]
]
console.info(actual);

assert.deepEqual( actual , expected );
