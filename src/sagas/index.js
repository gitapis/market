import { takeEvery } from 'redux-saga/effects';

import {GET_PRAYER_TIME_REQUEST, GET_PRAYER_TIME_BY_CITY_REQUEST, GET_ALL_PRODUCTS_REQUEST} from '../API/actions/index';
import getAllProducts from './GET_ALL_PRODUCTS';
import getPrayerTimeByCity from './GET_PRAYER_TIME_BY_CITY';
import getPrayerTimeByCountryAndCity from './GET_PRAYER_TIME_BY_ِCOUNTRY_AND_CITY';

export function* getPrayerTimeByCitySaga() {
	yield takeEvery(GET_PRAYER_TIME_BY_CITY_REQUEST, getPrayerTimeByCity);
}

export function* getPrayerTimeByCountryAndCitySaga() {
	yield takeEvery(GET_PRAYER_TIME_REQUEST, getPrayerTimeByCountryAndCity);
}

export function* getAllProductsSaga() {
	yield takeEvery(GET_ALL_PRODUCTS_REQUEST, getAllProducts);
}