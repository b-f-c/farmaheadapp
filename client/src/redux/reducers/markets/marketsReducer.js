import {
  MARKETS_RECEIVED,
  MARKETS_REQUESTED,
} from '../../actions/markets/marketsActionTypes'

const defaultState = {
  markets: [],
  isLoading: false,
}

// eslint-disable-next-line consistent-return
const MarketsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MARKETS_REQUESTED:
      return { ...state, isLoading: true }
    case MARKETS_RECEIVED:
      return { ...state, isLoading: false, markets: action.marketsData }
    default:
      return state
  }
}

export default MarketsReducer
