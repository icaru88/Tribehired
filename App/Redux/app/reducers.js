import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  loadingList: false,
  posts: [],
  loadingDetails: false,
  postDetails: [],
  loadingComments: false,
  comments: [],
});

const getListAttempt = (state) =>
  state.merge({
    loadingList: true,
  });

const getListSuccess = (state, action) =>
  state.merge({
    posts: action.posts,
    loadingList: false,
  });

const getListFailure = (state) =>
  state.merge({
    posts: [],
    loadingList: false,
  });

const getDetailAttempt = (state) =>
  state.merge({
    loadingDetails: true,
  });

const getDetailSuccess = (state, action) =>
  state.merge({
    postDetails: action.postDetails,
    loadingDetails: false,
  });

const getDetailFailure = (state) =>
  state.merge({
    loadingList: false,
  });

const getCommentAttempt = (state) =>
  state.merge({
    loadingComments: true,
  });

const getCommentSuccess = (state, action) =>
  state.merge({
    comments: action.comments,
    loadingComments: false,
  });

const getCommentFailure = (state) =>
  state.merge({
    loadingList: false,
  });

export default {
  INITIAL_STATE,
  getListAttempt,
  getListSuccess,
  getListFailure,

  getDetailAttempt,
  getDetailSuccess,
  getDetailFailure,

  getCommentAttempt,
  getCommentSuccess,
  getCommentFailure,
};
