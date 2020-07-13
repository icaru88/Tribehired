import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  commentSearchText: '',
});

const setCommentSearchText = (state, action) => {
  return state.merge({ 
    commentSearchText: action.text
  });
};

const clearCommentSearchText = (state) => {
  return state.merge({ 
    commentSearchText: ''
  });
}

export default {
  INITIAL_STATE,
  setCommentSearchText,
  clearCommentSearchText,
};
