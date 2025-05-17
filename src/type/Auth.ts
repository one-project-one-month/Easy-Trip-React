export type BaseUser = {
  id: string;
  email: string;
  isSurvey: Boolean;
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
  isSurvey: string;
};
