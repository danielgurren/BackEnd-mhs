import { IsEmail, IsString, MinLength, minLength } from "class-validator";




export class CreateUserDto {

    @IsEmail()
    email: string;
    
    @IsString()
    name: string;

    @MinLength(6)
    password: string;
}
