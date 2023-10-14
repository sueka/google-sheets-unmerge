interface ISpreadsheetApp {
  getActiveSheet(): ISheet
}

interface ISheet {
  getRange(a1Notation: string): IRange
}

interface IRange {
  getValues(): string[][]
}
