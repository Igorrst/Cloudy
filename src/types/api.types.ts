import { PostOwner, PostLike } from "./post.types";

export interface ApiPostResponse {
  id: string;
  content: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  owner?: PostOwner;
  likes?: PostLike[];
  comments?: ApiCommentResponse[];
}

export interface ApiCommentResponse {
  id: string;
  content: string;
  ownerId: string;
  createdAt: string;
  updatedAt?: string;
  owner?: PostOwner;
  likes?: PostLike[];
}

export interface ApiPostsResponse {
  posts: ApiPostResponse[];
  meta?: {
    page: number;
    total?: number;
  };
}

export interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'response' in error
  );
};

