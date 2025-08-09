// src/redux/actions.ts
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./actionTypes";
import type { ThunkAction } from "redux-thunk";
import type { RootState } from "./store";
import type { Action } from "redux";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST as typeof FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts: Post[]) => ({
  type: FETCH_POSTS_SUCCESS as typeof FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error: string) => ({
  type: FETCH_POSTS_FAILURE as typeof FETCH_POSTS_FAILURE,
  payload: error,
});

// Thunk action type
type ThunkResult<R> = ThunkAction<R, RootState, unknown, Action>;

export const fetchPosts = (): ThunkResult<void> => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => {
        dispatch(fetchPostsSuccess(data));
      })
      .catch((error: Error) => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};
