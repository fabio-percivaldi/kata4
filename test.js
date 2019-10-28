
/* eslint-disable id-length */
'use strict'
/* eslint-disable no-shadow */
const tap = require('tap')
const matrixGeneration = require('./index')


tap.test('Rule', async t => {
  const tests = [
    {
      input: {
        configuration: [
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 1],
        ],
        iterations: 0,
      },
      expected: [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
    },
    {
      input: {
        configuration: [
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 1]],
        iterations: 1,
      },
      expected: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    {
      input: {
        configuration: [
          [0, 1, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1],
        ],
        iterations: 1,
      },
      expected: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    },
    {
      input: {
        configuration: [
          [1, 1, 1],
          [0, 1, 0],
          [0, 0, 0]],
        iterations: 1,
      },
      expected: [
        [1, 1, 1],
        [1, 1, 1],
        [0, 0, 0],
      ],
    },
    {
      input: {
        configuration: [
          [1, 1, 1],
          [1, 1, 0],
          [0, 1, 0],
        ],
        iterations: 1,
      },
      expected: [
        [1, 0, 1],
        [0, 0, 0],
        [1, 1, 0],
      ],
    },
  ]

  tests.forEach((test, index) => {
    t.test(`${index + 1}`, async assert => {
      assert.strictSame(matrixGeneration(test.input.configuration, test.input.iterations), test.expected)
      assert.end()
    })
  })
  t.end()
})
