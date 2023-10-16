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

  it('works well with entire merged cells', () => {
    const unmerger = new Unmerger(SpreadsheetAppStub)

    const actual = unmerger.run('A1:C3')

    const expected = [
      ['BIG CELL', 'BIG CELL', 'meow'],
      ['BIG CELL', 'BIG CELL', 'croak'],
      ['coo', 'buzz', 'neigh'],
    ]

    assert.deepEqual(actual, expected)
  })

  it('works well with parts to the left of merged cells', () => {
    const unmerger = new Unmerger(SpreadsheetAppStub)

    const actual = unmerger.run('A1:A3')

    const expected = [
      ['BIG CELL'],
      ['BIG CELL'],
      ['coo'],
    ]

    assert.deepEqual(actual, expected)
  })

  it('works well with lower parts of merged cells', () => {
    const unmerger = new Unmerger(SpreadsheetAppStub)

    const actual = unmerger.run('B2:C3')

    const expected = [
      ['BIG CELL', 'croak'],
      ['buzz', 'neigh'],
    ]

    assert.deepEqual(actual, expected)
  })
})
