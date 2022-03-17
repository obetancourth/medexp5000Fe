import { combineReducers } from 'redux';
import { securityReducer } from './Security/Security.reducer';

export const rootReducer = combineReducers(
  {
    security: securityReducer
  }
)
