export interface InitialStatePosts {
  posts: Post[];
  postSelected: Post | null;
}

export interface Post {
  id?: number;
  title: string;
  description: string;
  image: string;
  author: string;
  updateAt: string;
  isActive?: boolean;
}
