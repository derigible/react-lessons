let store = {}

let storeReducers = {}

// sets up the store to echo the reducer structure
export function combineReducers(reducers) {
  Object.keys(reducers).forEach((slice) => (store[slice] = null))
  storeReducers = reducers
}

export function setupStore(initialState = {}) {
  const setupKeys = Object.keys(initialState)
  if (setupKeys.some((key) => !store.hasOwnProperty(key))) {
    throw new Error('Initial State must match reducer state')
  }

  return new ReduxObject(initialState, storeReducers)
}

class ReduxObject {
  constructor(initialState, reducers) {
    this.store = initialState
    this.reducers = reducers
  }

  dispatch = (action) => {
    Object.keys(this.reducers).forEach((reducerKey) => {
      const reduced = this.reducers(reducerKey)(this.store[reducerKey], action)
      this.store = { ...this.store, [reducerKey]: reduced }
    })
  }

  state = () => {
    return this.store
  }
}
