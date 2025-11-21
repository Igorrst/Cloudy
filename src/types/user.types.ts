import { ApiPostResponse } from "./api.types";

export interface CurrentUser {
  id: string;
  name: string;
  email: string;
  profilePhoto?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio?: string;
  profilePhoto?: string;
  createdAt: string;
  updatedAt: string;
  posts?: ApiPostResponse[];
  followers?: Array<{
    follower: {
      id: string;
      name: string;
    };
  }>;
  following?: Array<{
    following: {
      id: string;
      name: string;
    };
  }>;
}

