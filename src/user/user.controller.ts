import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import * as DTO from './dto';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('유저 API')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({
    summary: '유저리스트 조회',
  })
  @ApiCreatedResponse({ description: 'success' })
  async findUserList() {
    return await this.userService.findUserList();
  }

  @Post()
  @ApiOperation({
    summary: '유저 생성',
    description: `
                    request body
                  -----------------
                  name: 사용자 이름
                  email: 사용자 이메일`,
  })
  @ApiCreatedResponse({ description: 'success' })
  async createUser(@Body() body: DTO.CreateUserDto) {
    return await this.userService.createUser(body);
  }

  @Get('/:id')
  @ApiOperation({
    summary: '유저 조회',
    description: 'id : 사용자 id',
  })
  async findUserById(@Param('id') id: number) {
    return await this.userService.findUserById(id);
  }

  @Patch('/:id')
  async updateUserById(
    @Param('id') id: number,
    @Body() body: DTO.UpdateUserDto,
  ) {
    return await this.userService.updateUserById(id, body);
  }

  @Delete('/:id')
  async deleteUserById(@Param('id') id: number) {
    return await this.userService.deleteUserById(id);
  }
}
