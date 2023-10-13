function unmerge(a1Notation: string): any[][] {
  const range = SpreadsheetApp.getActiveSheet().getRange(a1Notation)

  return range.getValues()
}
