import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export default class CreateUserDto {
  @ApiProperty({
    example: '백혜인',
    description: '사용자 이름',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 'dev.hyein@icloud.com',
    description: '사용자 이메일',
  })
  @IsString()
  readonly email: string;
}
