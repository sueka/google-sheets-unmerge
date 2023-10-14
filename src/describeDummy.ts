// .claspignore does not work well: https://github.com/google/clasp/issues/968
// Therefore, `clasp push` also sends the tests, and then the Apps Script will fail.
// describe() avoids this.
// TODO: Delete
function describe() {}

export {}
