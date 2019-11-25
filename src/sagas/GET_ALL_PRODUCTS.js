import { call, put } from 'redux-saga/effects';

import bffApi from '../API/index';
import { boostUrl } from '../helpers/urls';
import { getAllProductsError, getAllProductsSuccess } from '../API/actions/index';

export default function* getAllProducts() {
    try {
        const client = bffApi(boostUrl);

        const { data } = yield call(client.getAllProducts, {});
        yield put(getAllProductsSuccess(data));
        //console.log(data);
    } catch (e) {
        console.log(e);
        yield put(getAllProductsError(e.toString()));
    }
}
