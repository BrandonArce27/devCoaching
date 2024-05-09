import * as bcrypt from 'bcrypt';

import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { SignUpInput } from './dto';

import { UserSelect } from 'src/api/user/model';

import { User } from 'src/api/user/model/user.model';

import { UserService } from 'src/api/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    try {
      const user = await this.userService.findOne(
        {
          select: {
            id: true,
            uuid: true,
            email: true,
            firstName: true,
            updatedAt: true,
            createdAt: true,
            lastName: true,
          },
        },
        {
          email,
          sub: '',
          expiresIn: 0,
          iat: 0,
        },
      );

      const userPassword = await this.userService.findPasswordbyEmail(email);

      const valid = await bcrypt.compare(password, userPassword);

      return user && valid ? user : null;
    } catch (error) {
      console.log(error);
    }
  }

  async login(user: User) {
    console.log('user', user);
    return {
      access_token: this.jwtService.sign({
        email: user.email,
        sub: user.uuid,
        //role: user.type,
        expiresIn: 60 * 5,
      }),
      expiresAt: new Date(Date.now() + 60 * 5),
      user,
    };
  }

  async signup(signUpInput: SignUpInput, select: UserSelect) {
    const userPassword = await this.userService.findPasswordbyEmail(
      signUpInput.email,
    );

    if (userPassword) {
      throw new Error('User already exists!');
    }

    const password = await bcrypt.hash(signUpInput.password, 10);

    return this.userService.create(
      {
        ...signUpInput,
        //type: Role.USER,
        password,
      },
      {
        ...select,
      },
    );
  }
}
