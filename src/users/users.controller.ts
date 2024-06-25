import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { UserDomain } from './user.domain'

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Get()
    async findAllUsers(@Res() response: Response) {
        const returnAllUsers = await this.usersService.findAllUsers();
        return response.status(200).json(returnAllUsers)
    }

    @Post()
    async createdUser(@Res() response: Response, @Body() user: UserDomain) {
        const userCreated = await this.usersService.createUser(user);
        return response.status(200).json({status: "Sucesso", userCreated});
    }
}
