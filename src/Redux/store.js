import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

import rootReducer from './reducers';
import {rootSaga} from './saga';

const PersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'product'],
  stateReconciler: autoMergeLevel2,
};
const pReducer = persistReducer(PersistConfig, rootReducer);
let middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);
middlewares.push(createLogger());

let store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

//const store = createStore(rootReducer);

export default store;
