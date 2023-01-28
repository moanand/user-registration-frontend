import { User } from './user.model';

export class UserResponse {
  users!: User[];
  message!: string;

  constructor() {}
}
