const VALUES = [
  ['BIG CELL', '', 'meow'],
  ['', '', 'croak'],
  ['coo', 'buzz', 'neigh'],
]

const LEFT_OF_MERGED = 1
const TOP_OF_MERGED = 1
const RIGHT_OF_MERGED = 2
const BOTTOM_OF_MERGED = 2

function sliceRange<T>(left: number, top: number, right: number, bottom: number, values: T[][]): T[][] {
  return values.slice(top - 1, bottom).map(row => row.slice(left - 1, right))
}

/**
 * @param top one-based
 * @param bottom one-based
 * @param left one-based
 * @param right one-based
 */
function generateRangeStub(left: number, top: number, right: number, bottom: number, wholeValues: string[][]) {
  const values = sliceRange(left, top, right, bottom, wholeValues)
  const isPartOfMerge =
    left <= RIGHT_OF_MERGED &&
    right >= LEFT_OF_MERGED &&
    top <= BOTTOM_OF_MERGED &&
    bottom >= TOP_OF_MERGED

  const rangeStub: IRange = {
    getValues() {
      return values
    },

    getMergedRanges() {
      if (isPartOfMerge) {
        return [mergedRange]
      } else {
        return []
      }
    },

    getValue() { return values[0]?.[0] ?? '' },
    getRow() { return top },
    getLastRow() { return bottom },
    getColumn() { return left },
    getLastColumn() { return right },
    getNumRows() { return bottom - top + 1 },
    getNumColumns() { return right - left + 1 },
  }

  return rangeStub
}

const mergedValues = sliceRange(
  LEFT_OF_MERGED,
  TOP_OF_MERGED,
  RIGHT_OF_MERGED,
  BOTTOM_OF_MERGED,
  VALUES
)

const mergedRange: IRange = generateRangeStub(
  LEFT_OF_MERGED,
  TOP_OF_MERGED,
  RIGHT_OF_MERGED,
  BOTTOM_OF_MERGED,
  mergedValues
)

// includes no merged cells.
const rangeA3C3Stub: IRange = generateRangeStub(1, 3, 3, 3, VALUES)

// includes the entire merged cell.
const rangeA1C3Stub: IRange = generateRangeStub(1, 1, 3, 3, VALUES)

// includes the entire merged cell.
const rangeA1A3Stub: IRange = generateRangeStub(1, 1, 1, 3, VALUES)

// includes some of the merged cell.
const rangeB2C3Stub: IRange = generateRangeStub(2, 2, 3, 3, VALUES)

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
