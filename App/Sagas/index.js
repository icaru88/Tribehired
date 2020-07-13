import {fork} from 'redux-saga/effects';
import APIs from '../Config/Api';

import postAPI from '../Services/PostApi';

import app from './app';

const postApi = postAPI.create(APIs.postApi);

export default function* root() {
  yield fork(app(postApi).rootSaga);
}
