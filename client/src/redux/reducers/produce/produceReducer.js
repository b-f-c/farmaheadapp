import {
  PRODUCT_REQUESTED,
  PRODUCE_RECEIVED,
} from '../../actions/produce/produceActionTypes'

const defaultState = {
  produceByVendor: [],
}

const ProduceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PRODUCT_REQUESTED:
      return { ...state, isLoading: true }
    case PRODUCE_RECEIVED:
      return { ...state, isLoading: false, produceByVendor: action.produceData }
    default:
      return state
  }
}

export default ProduceReducer
