import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import * as stockMovie from './stockMovie.reducer';

export const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  stockMovie: stockMovie.reducer,
});

export const initialState = {
  stockMovie: stockMovie.initialState,
};
