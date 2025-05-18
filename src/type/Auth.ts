export type BaseUser = {
  id: string;
  email: string;
  isSurvey: boolean;
};

export type Credential = {
  email: string;
  password: string;
};

export type RegisterUser = Credential & {
  name: string;
};

export type RegisterResponse = {
  accessToken: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken?: string;
};

export type User = {
  email: string;
  id: string;
  name: string;
  provider: string;
};
