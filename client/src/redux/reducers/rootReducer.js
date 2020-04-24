import { combineReducers } from 'redux'
import {
  MarketsReducer,
  VendorsReducer,
  ProduceReducer,
} from './page/pageReducer'
import UserReducer from './user/userReducer'

export default combineReducers({
  markets: MarketsReducer,
  vendors: VendorsReducer,
  produce: ProduceReducer,
  user: UserReducer,
})
