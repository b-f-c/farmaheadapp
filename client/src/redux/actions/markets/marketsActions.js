import Axios from 'axios'
import { MARKETS_RECEIVED, MARKETS_REQUESTED } from './marketsActionTypes'

export function marketsRequested() {
  return { type: MARKETS_REQUESTED }
}

export function marketsReceived(marketsData) {
  return { type: MARKETS_RECEIVED, marketsData }
}

export function fetchMarkets() {
  return (dispatch) => {
    dispatch(marketsRequested())
    return Axios.get(`${process.env.REACT_APP_REST_URL}/market`)
      .then((response) => {
        console.log(response)
        dispatch(marketsReceived(response.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
