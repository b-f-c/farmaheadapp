import { combineReducers } from 'redux';
import MarketsReducer from './markets/marketsReducer';

export default combineReducers({
  markets: MarketsReducer,
});
