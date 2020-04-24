import Axios from 'axios'
import {
  USER_LOGGED_IN,
  USER_RECEIVED,
  USER_REQUESTED,
} from './userActionTypes'

export const userRequested = () => ({ type: USER_REQUESTED })

export const userReceived = (userData) => ({
  type: USER_RECEIVED,
  userData,
})

export const loggedIn = () => ({ type: USER_LOGGED_IN })

export const fetchUserData = (userInfo) => {
  const { username } = userInfo
  return (dispatch) => {
    dispatch(userRequested())
    Axios.get(`${process.env.REACT_APP_REST_URL}/user?userName=${username}`)
      .then((response) => {
        dispatch(userReceived(response.data))
        dispatch(loggedIn())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
