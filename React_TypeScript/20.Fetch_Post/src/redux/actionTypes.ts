// src/redux/actionTypes.ts
export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST" as const;
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS" as const;
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE" as const;

export type FETCH_POSTS_REQUEST = typeof FETCH_POSTS_REQUEST;
export type FETCH_POSTS_SUCCESS = typeof FETCH_POSTS_SUCCESS;
export type FETCH_POSTS_FAILURE = typeof FETCH_POSTS_FAILURE;
