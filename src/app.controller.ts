import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { UserResponseMapper } from './mapper/user-response.mapper';
import { UserResponse } from './model/response/user.model';

@Controller('/user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() userRequest: any): Promise<UserResponse> {
    return UserResponseMapper.mapTo(await this.appService.create(userRequest));
  }

  @Get()
  async findAll(): Promise<UserResponse[]> {
    return UserResponseMapper.mapToList(await this.appService.findAll());
  }

  @Get('/id/:id')
  async findById(@Param('id') id): Promise<UserResponse> {
    return UserResponseMapper.mapTo(await this.appService.findById(id));
  }

  @Get('/username/:username')
  async findByUsername(@Param('username') username): Promise<UserResponse> {
    return UserResponseMapper.mapTo(
      await this.appService.findByUsername(username),
    );
  }

  @Get('/id-list')
  async update(@Query() id: string[]): Promise<any> {
    return UserResponseMapper.mapToList(await this.appService.findByIdList(id));
  }
}
