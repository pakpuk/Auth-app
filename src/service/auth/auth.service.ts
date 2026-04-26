import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/auth.dto';

@Injectable()
export class AuthService {
    private  users = [
        { id: 1, username: 'admin', password: 'admin', auth: 'admin' },
        { id: 2, username: 'user', password: 'user', auth: 'user' },
    ];

    createUser( userDetails : CreateUserDto){
        const newuser ={
            id : this.users.length + 1,
            ...userDetails,
        }
        this.users.push(newuser);
        return newuser;
    }

    getUsers(){
        return this.users;
    }
}
