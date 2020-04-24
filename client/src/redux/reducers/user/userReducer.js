import {
  USER_RECEIVED,
  USER_REQUESTED,
} from '../../actions/user/userActionTypes'

const defaultState = {}

const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_REQUESTED:
      return { ...state, isLoading: true }
    case USER_RECEIVED:
      return { ...state, isLoading: false, user: action.userData }
    default:
      return state
  }
}

export default UserReducer
