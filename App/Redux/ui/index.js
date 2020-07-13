import {createReducer} from 'reduxsauce';

import Reducers from './reducers';
import Types from './types';

export default {
  reducer: createReducer(Reducers.INITIAL_STATE, {
    [Types.UI_SET_COMMENT_SEARCH_TEXT]: Reducers.setCommentSearchText,
    [Types.UI_CLEAR_COMMENT_SEARCH_TEXT]: Reducers.clearCommentSearchText,
  }),
};
