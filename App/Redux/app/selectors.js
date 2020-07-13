const getPostList = (state) => state.posts;
const getPostIsLoading = (state) => state.loadingList;

const getPostDetails = (state) => state.postDetails;
const getPostDetailsIsLoading = (state) => state.loadingDetails;

const getPostComments = (state) => state.comments;
const getPostCommentsIsLoading = (state) => state.loadingComments;

export default {
    getPostList,
    getPostIsLoading,
    
    getPostDetails,
    getPostDetailsIsLoading,

    getPostComments,
    getPostCommentsIsLoading,
};