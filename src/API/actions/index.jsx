import { createAction } from '../../helpers/index';

export const GET_PRAYER_TIME_REQUEST = 'GET_PRAYER_TIME_REQUEST';
export const GET_PRAYER_TIME_REQUEST_ERROR = 'GET_PRAYER_TIME_REQUEST_ERROR';
export const GET_PRAYER_TIME_REQUEST_SUCCESS = 'GET_PRAYER_TIME_REQUEST_SUCCESS';

export const GET_PRAYER_TIME_BY_CITY_REQUEST = 'GET_PRAYER_TIME_BY_CITY_REQUEST';
export const GET_PRAYER_TIME_BY_CITY_REQUEST_ERROR = 'GET_PRAYER_TIME_BY_CITY_REQUEST_ERROR';
export const GET_PRAYER_TIME_BY_CITY_REQUEST_SUCCESS = 'GET_PRAYER_TIME_BY_CITY_REQUEST_SUCCESS';

export const GET_ALL_PRODUCTS_REQUEST = 'GET_ALL_PRODUCTS_REQUEST';
export const GET_ALL_PRODUCTS_REQUEST_ERROR = 'GET_ALL_PRODUCTS_REQUEST_ERROR';
export const GET_ALL_PRODUCTS_REQUEST_SUCCESS = 'GET_ALL_PRODUCTS_REQUEST_SUCCESS';

export const getPrayerTime = createAction(GET_PRAYER_TIME_REQUEST, 'city','country','method','month','year');
export const getPrayerTimeError = createAction(GET_PRAYER_TIME_REQUEST_ERROR, 'error');
export const getPrayerTimeSuccess = createAction(GET_PRAYER_TIME_REQUEST_SUCCESS);

export const getPrayerTimeByCity = createAction(GET_PRAYER_TIME_BY_CITY_REQUEST, 'city');
export const getPrayerTimeByCityError = createAction(GET_PRAYER_TIME_BY_CITY_REQUEST_ERROR, 'error');
export const getPrayerTimeByCitySuccess = createAction(GET_PRAYER_TIME_BY_CITY_REQUEST_SUCCESS);

export const getAllProducts = createAction(GET_ALL_PRODUCTS_REQUEST);
export const getAllProductsError = createAction(GET_ALL_PRODUCTS_REQUEST_ERROR, 'error');
export const getAllProductsSuccess = createAction(GET_ALL_PRODUCTS_REQUEST_SUCCESS);