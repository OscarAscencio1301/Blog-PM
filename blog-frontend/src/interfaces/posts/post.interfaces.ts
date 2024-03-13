export interface InitialStatePosts {
  isLoading: boolean;
  posts: Post[];
  postsLatest: Post[];
  postsSearch: Post[];
  postSelected: Post | null;
  postView: Post | null;
}
export interface PostsResponse {
  ok: boolean;
  posts: Post[];
  postLatest: Post[];
}

export interface Post {
  id?: number;
  title: string;
  description: string;
  image: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  isActive?: boolean;
}
