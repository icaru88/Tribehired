import {fork} from 'redux-saga/effects';
import {watchGetPostList} from './getPostList';
import {watchGetPostDetails} from './getPostDetail';
import {watchGetPostComments} from './getPostComments'
;
export default (api) => {
  function* rootSaga() {
    yield fork(watchGetPostList, api);
    yield fork(watchGetPostDetails, api);
    yield fork(watchGetPostComments, api);
  }

  return {
    rootSaga,
  };
};
