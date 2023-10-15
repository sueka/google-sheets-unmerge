const rangeA3C3Stub: IRange = { // includes no merged cells.
  getValues() {
    return [
      ['coo', 'buzz', 'neigh'],
    ]
  },

  getMergedRanges() {
    return []
  },
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
    }

    return [mergedRange]
  },
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
    }

    return [mergedRange]
  },
}

const sheetStub: ISheet = {
  getRange(a1Notation) {
    switch (a1Notation) {
      case 'A3:C3': return rangeA3C3Stub
      case 'A1:C3': return rangeA1C3Stub
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
