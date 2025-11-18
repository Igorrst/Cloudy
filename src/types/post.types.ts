export interface PostOwner {
  name: string;
  id: string;
}

export interface PostLike {
  id: string;
  name: string;
}

export interface PostComment {
  id: string;
  content: string;
  owner: {
    name: string;
    id: string;
  };
  createdAt: string;
  updatedAt?: string;
  likes?: PostLike[];
}

export interface Post {
  id: string;
  content: string;
  owner: PostOwner;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  likes: PostLike[];
  comments: PostComment[];
}

