export interface InitialStatePosts {
  posts: Post[];
  postsLatest: Post[];
  postsSearch: Post[];
  postSelected: Post | null;
}

export interface Post {
  id?: number;
  title: string;
  description: string;
  image: string;
  author: string;
  updatedAt: string;
  isActive?: boolean;
}
