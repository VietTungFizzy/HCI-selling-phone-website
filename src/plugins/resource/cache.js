// Note for '!!'
// https://brianflove.com/2014-09-02/whats-the-double-exclamation-mark-for-in-javascript/

export default (() => {
  let store = {}

  return {
    has: uri => !!store[uri],
    get: uri => JSON.parse(store[uri]),
    set: (uri, data) => {
      store[uri] = JSON.stringify(data)
      return Promise.resolve(data)
    }
  }
})