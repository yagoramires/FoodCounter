import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './modules/user/reducer';
import reducerCounter from './modules/counter/reducer';

const reducers = combineReducers({
  user: userReducer,
  counter: reducerCounter,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
