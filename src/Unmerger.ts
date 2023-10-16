export default class Unmerger {
  #spreadsheetApp: ISpreadsheetApp

  constructor(spreadsheetApp: ISpreadsheetApp) {
    this.#spreadsheetApp = spreadsheetApp
  }

  run(a1Notation: string): any[][] {
    const range = this.#spreadsheetApp.getActiveSheet().getRange(a1Notation)
    const values = range.getValues()
    const offsetRows = range.getRow() - 1
    const offsetColumns = range.getColumn() - 1
    const rows = range.getNumRows()
    const columns = range.getNumColumns()
    const mergedRanges = range.getMergedRanges()

    for (const mergedRange of mergedRanges) {
      const value = mergedRange.getValue()
      const top = mergedRange.getRow()
      const bottom = mergedRange.getLastRow()
      const left = mergedRange.getColumn()
      const right = mergedRange.getLastColumn()

      for (let i = top - offsetRows - 1; i <= bottom - offsetRows - 1; i++) {
        for (let j = left - offsetColumns - 1; j <= right - offsetColumns - 1; j++) {
          if (!(0 <= i && i < rows) || !(0 <= j && j < columns)) {
            continue
          }

          // @ts-expect-error TS2532
          values[i][j] = value
        }
      }
    }

    return values
  }
}
