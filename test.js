'use strict'
/* eslint-disable no-shadow */
const tap = require('tap')
const iterate = require('./index')
tap.test('First Rule', test => {
  test.test('test 1', assert => {
    const configuration = [[0, 0, 0], [0, 1, 0], [0, 0, 1]]

    const expectedConfiguration = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

    assert.strictSame(iterate(configuration), expectedConfiguration)
    assert.end()
  })

  test.test('test 2', assert => {
    const configuration = [[0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 1]]

    const expectedConfiguration = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]

    assert.strictSame(iterate(configuration), expectedConfiguration)
    assert.end()
  })

  test.test('test 3', assert => {
    const configuration = [[1, 1, 1], [0, 1, 0], [0, 0, 0]]

    const expectedConfiguration = [[0, 1, 0], [0, 1, 0], [0, 0, 0]]

    assert.strictSame(iterate(configuration), expectedConfiguration)
    assert.end()
  })

  test.end()
})
