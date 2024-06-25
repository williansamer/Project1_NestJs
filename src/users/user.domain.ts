import { IsNotEmpty, IsOptional, IsString, MinLength, MaxLength, IsEmail, IsDate,  } from 'class-validator';

export class UserDomain {
    @IsOptional()
    @IsString({message: 'ID should be a string'})
    readonly id?: string;

    @IsString({message: 'ID should be a string'})
    @IsNotEmpty({message: 'Name is required'})
    @MinLength(3, {message: 'Name should be at least 3 characters long'})
    @MaxLength(100, {message: 'Name should not exceed 100 characters'})
    readonly name: string;

    @IsString({message: 'ID should be a string'})
    @IsNotEmpty({message: 'Name is required'})
    @IsEmail({}, {message: 'Invalid email format'})
    readonly email: string;

    @IsString({message: 'ID should be a string'})
    @MinLength(6, {message: 'Name should be at least 6 characters long'})
    @MaxLength(255, {message: 'Name should not exceed 255 characters'})
    readonly password: string;

    @IsOptional()
    @IsDate({message: 'Invalid date format'})
    readonly created_at?: string;

    @IsOptional()
    @IsDate({message: 'Invalid date format'})
    readonly updated_at?: string;
}