interface ISpreadsheetApp {
  getActiveSheet(): ISheet
}

interface ISheet {
  getRange(a1Notation: string): IRange
}

interface IRange {
  getValue(): string // top-left value
  getValues(): string[][]
  getMergedRanges(): IRange[]
  getRow(): number
  getLastRow(): number
  getColumn(): number
  getLastColumn(): number
}
