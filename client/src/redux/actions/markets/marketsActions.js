import Axios from 'axios';
import { MARKETS_RECEIVED, MARKETS_REQUESTED } from './marketsActionTypes';

export function marketsRequested(marketsData) {
  return { type: MARKETS_REQUESTED, marketsData };
}

export function marketsReceived() {
  return { type: MARKETS_RECEIVED };
}

export function fetchMarkets() {
  return (dispatch) => {
    dispatch(marketsRequested());
    return Axios.get(`${process.env.REACT_APP_REST_URL}/market`)
      .then((response) => {
        dispatch(marketsReceived(response));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
