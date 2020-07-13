import {take, put, call} from 'redux-saga/effects';

import Actions from '../../Redux/Actions';
import Types from '../../Redux/Types';

export function* watchGetPostDetails(api) {
    while (true) {
        const {postId} = yield take(Types.POST_DETAIL_GET_ATTEMPT);
        yield call(handleGetPostDetails, api, postId);
    }
};

export function* handleGetPostDetails(api, postId) {
    const response = yield call(api.getPostDetails, postId);
    console.log(response);
    if (response.ok) {
        yield put(Actions.postDetailGetSuccess(response.data));
    }
    else {
        yield put(Actions.postDetailGetFailure());
    }
}
