import {createReducer} from 'reduxsauce';

import Reducers from './reducers';
import Types from './types';

export default {
  reducer: createReducer(Reducers.INITIAL_STATE, {
    [Types.POST_LIST_GET_ATTEMPT]: Reducers.getListAttempt,
    [Types.POST_LIST_GET_SUCCESS]: Reducers.getListSuccess,
    [Types.POST_LIST_GET_FAILURE]: Reducers.getListFailure,

    [Types.POST_DETAIL_GET_ATTEMPT]: Reducers.getDetailAttempt,
    [Types.POST_DETAIL_GET_SUCCESS]: Reducers.getDetailSuccess,
    [Types.POST_DETAIL_GET_FAILURE]: Reducers.getDetailFailure,

    [Types.POST_COMMENT_GET_ATTEMPT]: Reducers.getCommentAttempt,
    [Types.POST_COMMENT_GET_SUCCESS]: Reducers.getCommentSuccess,
    [Types.POST_COMMENT_GET_FAILURE]: Reducers.getCommentFailure,
  }),
};
