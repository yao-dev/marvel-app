import { createStore, combineReducers, applyMiddleware } from 'redux';
import nextConnectRedux from 'next-connect-redux';
import thunk from 'redux-thunk';
import reducer from 'src/reducer';

export const initStore = (initialState, options) => {
  const REDUX_DEVTOOLS = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || undefined ;

  const rootReducer = combineReducers({
    app: reducer
  });

  return createStore(
    rootReducer,
    REDUX_DEVTOOLS,
    applyMiddleware(thunk),
  );
};

export const nextConnect = nextConnectRedux(initStore);
