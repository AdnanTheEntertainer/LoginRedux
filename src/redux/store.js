import {createStore, applyMiddleware, combineReducers} from 'redux';

import userReducer from './user.reducer';
import apiReducer from './api.reducer';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

export default function configureStore() {
  const appReducer = combineReducers({userReducer, apiReducer});
  const rootReducer = (state, action) => appReducer(state, action);
  const logger = createLogger()
  const store = createStore(rootReducer, applyMiddleware(thunk, logger));

  return store;
}
