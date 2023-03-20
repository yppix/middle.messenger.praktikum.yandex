export interface SigninData {
  login: string;
  password: string;
}

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export const UserProfileFields:Array<string> =  ['first_name', 'second_name', 'login', 'display_name', 'email', 'phone'];

export const ChangePasswordFields:Array<string> =  ['oldPassword', 'newPassword'];

