import {
  USER_LOGGED_IN,
  USER_RECEIVED,
  USER_REQUESTED,
} from '../../actions/user/userActionTypes'

const defaultState = {
  userData: null,
  isLoading: false,
  loggedIn: false,
}

const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_REQUESTED:
      return { ...state, isLoading: true }
    case USER_RECEIVED:
      return { ...state, isLoading: false, userData: action.userData }
    case USER_LOGGED_IN:
      return { ...state, loggedIn: true }
    default:
      return state
  }
}

export default UserReducer
