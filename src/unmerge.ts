import Unmerger from './Unmerger'

function unmerge(a1Notation: string): any[][] {
  const unmerger = new Unmerger(SpreadsheetApp)

  return unmerger.run(a1Notation)
}
