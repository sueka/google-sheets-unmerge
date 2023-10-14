export default class Unmerger {
  #spreadsheetApp: ISpreadsheetApp

  constructor(spreadsheetApp: ISpreadsheetApp) {
    this.#spreadsheetApp = spreadsheetApp
  }

  run(a1Notation: string): any[][] {
    const range = this.#spreadsheetApp.getActiveSheet().getRange(a1Notation)

    return range.getValues()
  }
}
