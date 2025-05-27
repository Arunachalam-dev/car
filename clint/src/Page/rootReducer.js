import { combineReducers } from 'redux';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  bookingreduser: bookingReducer, // Match this in the useSelector
});

export default rootReducer;
