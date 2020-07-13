import app from './app/selectors';
import ui from './ui/selectors';

const getPostList = (state) => app.getPostList(state.app);
const getPostIsLoading = (state) => app.getPostIsLoading(state.app);

const getPostDetails = (state) => app.getPostDetails(state.app);
const getPostDetailsIsLoading = (state) => app.getPostDetailsIsLoading(state.app);

const getPostComments = (state) => app.getPostComments(state.app);
const getPostCommentsIsLoading = (state) => app.getPostCommentsIsLoading(state.app);

const getUiCommentSearchText = (state) => ui.getUICommentSearchText(state.ui);

export default {
    getPostList,
    getPostIsLoading,

    getPostDetails,
    getPostDetailsIsLoading,

    getPostComments,
    getPostCommentsIsLoading,

    getUiCommentSearchText,
};