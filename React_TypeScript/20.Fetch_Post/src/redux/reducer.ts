// src/redux/reducer.ts
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./actionTypes";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  loading: boolean;
  posts: Post[];
  error: string | null;
}

const initialState: PostsState = {
  loading: false,
  posts: [],
  error: null,
};

// Define action types using discriminated unions:
type PostsAction =
  | { type: typeof FETCH_POSTS_REQUEST }
  | { type: typeof FETCH_POSTS_SUCCESS; payload: Post[] }
  | { type: typeof FETCH_POSTS_FAILURE; payload: string };

const postReducer = (
  state = initialState,
  action: PostsAction
): PostsState => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postReducer;
