import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export default class UpdateUserDto {
  @ApiProperty({
    example: '백혜인',
    description: '사용자 이름',
  })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 'dev.hyein@icloud.com',
    description: '사용자 이메일',
  })
  @IsOptional()
  @IsString()
  readonly email: string;
}
