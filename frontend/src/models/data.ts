interface User {
  email: string;
  password: string;
}

export interface Data {
  user: User;
  street: string;
  city: string;
  zip: string;
  country: string;
  birthday: string;
  aboutMe: string;
}

export type OnboardingData = Omit<Data, 'user'> & User;