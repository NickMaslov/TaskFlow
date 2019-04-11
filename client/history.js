let createHistory = require("history").createBrowserHistory
let createMemoryHistory = require("history").createMemoryHistory

const history =
  process.env.NODE_ENV === 'test' ? createMemoryHistory() : createHistory()

export default history
