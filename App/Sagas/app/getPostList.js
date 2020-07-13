import {take, put, call} from 'redux-saga/effects';

import Actions from '../../Redux/Actions';
import Types from '../../Redux/Types';

export function* watchGetPostList(api) {
    while (true) {
        yield take(Types.POST_LIST_GET_ATTEMPT);
        yield call(handleGetPostList, api);
    }
};

export function* handleGetPostList(api) {
    const response = yield call(api.getPostList);
    console.log(response);
    if (response.ok) {
        yield put(Actions.postListGetSuccess(response.data));
    }
    else {
        yield put(Actions.postListGetFailure());
    }
}
