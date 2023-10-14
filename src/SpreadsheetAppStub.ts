const rangeA3C3Stub: IRange = {
  getValues() {
    return [
      ['coo', 'buzz', 'neigh'],
    ]
  },
}

const sheetStub: ISheet = {
  getRange(a1Notation) {
    switch (a1Notation) {
      case 'A3:C3': return rangeA3C3Stub
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
