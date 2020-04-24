import Axios from 'axios'
import { USER_RECEIVED, USER_REQUESTED } from './userActionTypes'

export const userRequested = () => ({ type: USER_REQUESTED })

export const userReceived = (userData) => ({
  type: USER_RECEIVED,
  userData,
})

export const fetchUserData = (userInfo) => {
  const { username } = userInfo
  return (dispatch) => {
    dispatch(userRequested())
    Axios.get(`${process.env.REACT_APP_REST_URL}/user?username=${username}`)
      .then((response) => {
        dispatch(userReceived(response.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
