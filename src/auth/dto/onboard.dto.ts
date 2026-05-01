import { IsString, IsEnum, IsOptional, IsUrl } from 'class-validator';

enum Role {
  STUDENT = 'STUDENT',
  INSTRUCTOR = 'INSTRUCTOR',
}

export class OnboardDto {
  @IsEnum(Role)
  role: Role;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsUrl()
  @IsOptional()
  avatar?: string;
}
