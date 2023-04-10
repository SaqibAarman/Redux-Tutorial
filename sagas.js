import { takeEvery } from "redux-saga/effects";

import { put, takeEvery, all } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* helloSaga() {
  console.log("Hello World!...");
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}

/*

import Api from './path/to/api';

export function* watchFetchProducts() {
    yield takeEvery('PRODUCTS_REQUESTED', fetchProducts)
  }
  
 export function* fetchProducts() {
    const products = yield Api.fetch('/products')
    console.log(products);
  } */
