import { legacy_createStore,combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import carreducer from './Reducer/carsReduces';
import { aletreduse } from './Reducer/alterreduser';

import bookingReducer from './Reducer/bookingreducer';


const composeEnhancers = composeWithDevTools({

});
const rootreduce=combineReducers({carreducer,aletreduse,bookingreducer: bookingReducer, }
    
)
const store = legacy_createStore(
  rootreduce,
  composeEnhancers(
    applyMiddleware(thunk)

  )
);

export default store;