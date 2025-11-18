export interface CurrentUser {
  id: string;
  name: string;
  email: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio?: string;
  profilePhoto?: string;
  createdAt: string;
  updatedAt: string;
  posts?: Array<{
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    ownerId: string;
  }>;
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

