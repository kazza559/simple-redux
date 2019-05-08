import getList from "../apis/get";

export const fetchPosts = () => async dispatch => {
  const response = await getList.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export const fetchUsers = id => async dispatch => {
  const response = await getList.get(`users/${id}`);

  dispatch({
    type: "FETCH_USERS",
    payload: response.data
  });
};

export const fetchPostsAndUsers = () => async dispatch => {
   const 
}