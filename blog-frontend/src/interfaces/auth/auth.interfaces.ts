export interface InitialStateAuth {
  statusAuth: "login" | "logout" | "analyzing";
  user?: User;
  error?: string;
}
export interface PostsResponse {
  ok: boolean;
  user: User;
}

export interface User {
  id?: number;
  name?: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}
