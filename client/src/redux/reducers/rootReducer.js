import { combineReducers } from 'redux'
import {
  MarketsReducer,
  VendorsReducer,
  ProduceReducer,
} from './page/pageReducer'
import UserReducer from './user/userReducer'
import ProduceByVendor from './produce/produceReducer'

export default combineReducers({
  markets: MarketsReducer,
  vendors: VendorsReducer,
  produce: ProduceReducer,
  user: UserReducer,
  produceByVendor: ProduceByVendor,
})
