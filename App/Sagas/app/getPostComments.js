import {take, put, call} from 'redux-saga/effects';

import Actions from '../../Redux/Actions';
import Types from '../../Redux/Types';

export function* watchGetPostComments(api) {
    while (true) {
        const {postId} = yield take(Types.POST_COMMENT_GET_ATTEMPT);
        yield call(handleGetPostComments, api, postId);
    }
};

export function* handleGetPostComments(api, postId) {
    const response = yield call(api.getPostComments, postId);
    console.log(response);
    if (response.ok) {
        yield put(Actions.postCommentGetSuccess(response.data));
    }
    else {
        yield put(Actions.postCommentGetFailure());
    }
}
