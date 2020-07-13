import Types from './types';

const setCommentSearchText = (text) => {
  return {
    type: Types.UI_SET_COMMENT_SEARCH_TEXT,
    text,
  }
}

const clearCommentSearchText = () => {
  return {
    type: Types.UI_CLEAR_COMMENT_SEARCH_TEXT,
  }
}

export default {
  setCommentSearchText,
  clearCommentSearchText,
};
