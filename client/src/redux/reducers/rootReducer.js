import { combineReducers } from 'redux';
import { MarketsReducer, VendorsReducer, ProduceReducer } from './page/pageReducer';

export default combineReducers({
  markets: MarketsReducer,
  vendors: VendorsReducer,
  produce: ProduceReducer
});
