const rangeA3C3Stub: IRange = { // includes no merged cells.
  getValues() {
    return [
      ['coo', 'buzz', 'neigh'],
    ]
  },

  getMergedRanges() {
    return []
  },

  getValue() { return 'coo' },
  getRow() { return 3 },
  getLastRow() { return 3 },
  getColumn() { return 1 },
  getLastColumn() { return 3 },
}

const rangeA1C3Stub: IRange = { // includes the entire merged cell.
  getValues() {
    return [
      ['BIG CELL', '', 'meow'],
      ['', '', 'croak'],
      ['coo', 'buzz', 'neigh'],
    ]
  },

  getMergedRanges() {
    const mergedRange: IRange = {
      getValues() {
        return [
          ['BIG CELL', ''],
          ['', ''],
        ]
      },

      getMergedRanges() {
        return [mergedRange]
      },

      getValue() { return 'BIG CELL' },
      getRow() { return 1 },
      getLastRow() { return 2 },
      getColumn() { return 1 },
      getLastColumn() { return 2 },
    }

    return [mergedRange]
  },

  getValue() { return 'BIG CELL' },
  getRow() { return 1 },
  getLastRow() { return 3 },
  getColumn() { return 1 },
  getLastColumn() { return 3 },
}

const rangeA1A3Stub: IRange = { // includes the entire merged cell.
  getValues() {
    return [
      ['BIG CELL'],
      [''],
      ['coo'],
    ]
  },

  getMergedRanges() {
    const mergedRange: IRange = {
      getValues() {
        return [
          ['BIG CELL', ''],
          ['', ''],
        ]
      },

      getMergedRanges() {
        return [mergedRange]
      },

      getValue() { return 'BIG CELL' },
      getRow() { return 1 },
      getLastRow() { return 2 },
      getColumn() { return 1 },
      getLastColumn() { return 2 },
    }

    return [mergedRange]
  },

  getValue() { return 'BIG CELL' },
  getRow() { return 1 },
  getLastRow() { return 3 },
  getColumn() { return 1 },
  getLastColumn() { return 1 },
}

const rangeB2C3Stub: IRange = { // includes some of the merged cell.
  getValues() {
    return [
      ['', 'croak'],
      ['buzz', 'neigh'],
    ]
  },

  getMergedRanges() {
    const mergedRange = {
      getValues() {
        return [
          ['BIG CELL', ''],
          ['', ''],
        ]
      },

      getMergedRanges() {
        return [mergedRange]
      },

      getValue() { return 'BIG CELL' },
      getRow() { return 1 },
      getLastRow() { return 2 },
      getColumn() { return 1 },
      getLastColumn() { return 2 },
    }

    return [mergedRange]
  },

  getValue() { return '' }, // FIXME: Maybe `return void`
  getRow() { return 2 }, // FIXME: Maybe `return 1`
  getLastRow() { return 3 },
  getColumn() { return 2 }, // FIXME: Maybe `return 1`
  getLastColumn() { return 3 },
}

const sheetStub: ISheet = {
  getRange(a1Notation) {
    switch (a1Notation) {
      case 'A3:C3': return rangeA3C3Stub
      case 'A1:C3': return rangeA1C3Stub
      case 'A1:A3': return rangeA1A3Stub
      case 'B2:C3': return rangeB2C3Stub
      default: throw new Error // unreachable
    }
  },
}

const SpreadsheetAppStub: ISpreadsheetApp = {
  getActiveSheet() {
    return sheetStub
  },
}

export default SpreadsheetAppStub
