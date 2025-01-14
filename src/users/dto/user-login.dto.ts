import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Invalid email specified' })
	email: string;

	@IsString()
	password: string;
}
