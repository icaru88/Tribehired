import Types from './types';

const postListGetAttempt = () => {
  return {
    type: Types.POST_LIST_GET_ATTEMPT,
  };
};

const postListGetSuccess = (posts) => {
  return {
    type: Types.POST_LIST_GET_SUCCESS,
    posts,
  };
};

const postListGetFailure = () => ({
  type: Types.POST_LIST_GET_FAILURE,
});

const postDetailGetAttempt = (postId) => {
  return {
    type: Types.POST_DETAIL_GET_ATTEMPT,
    postId,
  };
};

const postDetailGetSuccess = (postDetails) => {
  return {
    type: Types.POST_DETAIL_GET_SUCCESS,
    postDetails,
  };
};

const postDetailGetFailure = () => ({
  type: Types.POST_DETAIL_GET_FAILURE,
});

const postCommentGetAttempt = (postId) => {
  return {
    type: Types.POST_COMMENT_GET_ATTEMPT,
    postId,
  };
};

const postCommentGetSuccess = (comments) => {
  return {
    type: Types.POST_COMMENT_GET_SUCCESS,
    comments
  };
};

const postCommentGetFailure = () => ({
  type: Types.POST_COMMENT_GET_FAILURE,
});

export default {
  postListGetAttempt,
  postListGetSuccess,
  postListGetFailure,

  postDetailGetAttempt,
  postDetailGetSuccess,
  postDetailGetFailure,

  postCommentGetAttempt,
  postCommentGetSuccess,
  postCommentGetFailure,
};
