export type AuthUser = {
  id: string;
  email: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  email: string;
  password: string;
  confirmPassword: string;
};
