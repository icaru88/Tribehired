import apisauce from 'apisauce';
import Api from '../Config/Api';

const create = (baseURL = Api.postApi) => {
  const api = apisauce.create({
    baseURL,
    timeout: 5000,
  });

  const getPostList = () => api.get('/posts');
  const getPostDetails = (postId) => api.get(`/posts/${postId}`);
  const getPostComments = (postId) => api.get(`/comments?postId=${postId}`);

  return {
    getPostList,
    getPostDetails,
    getPostComments,
  };
};

export default {
  create,
};
