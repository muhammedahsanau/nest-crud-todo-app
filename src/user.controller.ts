import {
  Controller,
  Delete,
  Put,
  Post,
  Get,
  Redirect,
  Param,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {
    console.log('user controller');
  }

  @Get('/byId/:id')
  getUserById(@Param() params): string {
    const users = {
      1: {
        name: 'ahsan',
      },
      2: {
        name: 'walii',
      },
    };
    return JSON.stringify(users[params.id]);
  }

  @Get('/')
  @Redirect('http://localhost:3000/user/delete', 200)
  @Post('/add')
  create(): string {
    console.log('user controller');

    return 'user created';
  }

  @Delete('/delete')
  delete(): string {
    console.log('user controller');

    return 'user deleted';
  }

  @Put('/update')
  update(): string {
    console.log('user controller');

    return 'This will update this user';
  }
}
