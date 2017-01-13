import {combineReducers} from 'redux'

// groups actionTypes
const REQUEST_GROUPS = 'REQUEST_GROUPS'

// groups reducers
const groups = (state = {
  isFetching: false,
  groups: null,
}, action) => {
  console.log('child action')
  switch (action.type) {
    case REQUEST_GROUPS:
      return Object.assign({}, state, {
        isFetching: true,
        groups: action.groups,
      })
    default:
      return state
  }
}

// groups actions
export function requestGroups(groups) {
  return {
    type: REQUEST_GROUPS,
    groups: groups
  }
}

const reducers = combineReducers({
  groups,
})

export default reducers
