/// <reference path="./types.ts" />

import assert from 'assert'
import SpreadsheetAppStub from './SpreadsheetAppStub'
import Unmerger from './Unmerger'

describe('Unmerger', () => {
  it('works well with no merged cells', () => {
    const unmerger = new Unmerger(SpreadsheetAppStub)

    const actual = unmerger.run('A3:C3')

    const expected = [
      ['coo', 'buzz', 'neigh'],
    ]

    assert.deepEqual(actual, expected)
  })
})
