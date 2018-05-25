// ​export const READ_JSON = 'READ_JSON'
// export const SEARCH_STUDENT = 'SEARCH_STUDENT'

export function readJson(input) {
  return {
    type: READ_JSON,
    payload: result
  }
}

export function searchStudentAndDisplay(input) {
  return {
    type: SEARCH_STUDENT,
    payload: result
  }
}
