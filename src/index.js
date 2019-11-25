import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  {
    getAllProductsSaga,
    getPrayerTimeByCitySaga,
    getPrayerTimeByCountryAndCitySaga
}  from './sagas';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import {getAllProducts} from "./API/actions";

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

sagaMiddleware.run(getAllProductsSaga);
sagaMiddleware.run(getPrayerTimeByCitySaga);
sagaMiddleware.run(getPrayerTimeByCountryAndCitySaga);

store.dispatch(getAllProducts());
serviceWorker.unregister();
