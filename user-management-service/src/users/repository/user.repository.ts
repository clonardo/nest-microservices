import { UserDto } from "../interfaces/user.dto";
import { User } from "../models/user.model";


export class UserRepository {
  private users: User[] = [];
  async createUser(userDto: UserDto): Promise<User> {
    const user = new User(Math.random()*1000+"",userDto);
    this.users.push(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }
}