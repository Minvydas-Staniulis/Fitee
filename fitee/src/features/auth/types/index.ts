export type AuthUser = {
  email: string;
  userName: string;
};

export type UserResponse = {
  token: string;
  user: AuthUser;
};
