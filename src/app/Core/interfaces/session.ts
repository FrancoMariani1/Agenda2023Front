import { User } from './user';

export interface ISession {
  expiresIn: string;
  token?: string;
}

export interface IMeData {
  status: boolean;
  message?: string;
  user?: User;
}
