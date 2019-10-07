import { Injectable, Inject } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { USERS_SERVICE } from './users.constants';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
constructor(@Inject(USERS_SERVICE) private readonly client: ClientProxy) {}

  register(registerUserDto: RegisterUserDto) {
    return this.client.emit("register_user",registerUserDto);
  }
}