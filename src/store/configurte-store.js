import {
    createStore,
    // combineReducers,
    applyMiddleware,
    compose,
} from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';


export default function configureStore() {
  // NOTICE: thunkは必ず一番最初に、redux-loggerは一番最後に読み込むこと
  const middleware = [
    thunk,
  ];

  // chromeのreduxdevtoolを適用
  // eslint-disable-next-line no-underscore-dangle,max-len
  const addReduxDevTool = () => window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = addReduxDevTool() || compose;

  const store = createStore(
    // combineReducers({
    //   reducers,
    // }),
    reducers,
    composeEnhancers(applyMiddleware(...middleware)),

  );
  return store;
}
