interface User {
  email: string;
  password: string;
}

export interface Data {
  user: User;
  street: string | null;
  city: string | null;
  zip: string | null;
  country: string | null;
  birthday: string | null;
  aboutMe: string | null;
}

export type OnboardingData = Omit<Data, 'user'> & User;