import {
  createStore, compose, applyMiddleware,
} from 'redux';
import thunkMiddlware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { rootReducer } from '../reducers/index.reducer';

export const history = createBrowserHistory();

export const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(
      thunkMiddlware,
      routerMiddleware(history),
    ),
  ),
);
