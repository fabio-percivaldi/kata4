'use strict'
/* eslint-disable no-shadow */
const tap = require('tap')
const iterate = require('./index')
tap.test('kata3', assert => {
  const configuration = [[0, 0, 0], [0, 1, 0], [0, 0, 1]]

  const expectedConfiguration = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

  assert.strictSame(iterate(configuration), expectedConfiguration)
})
