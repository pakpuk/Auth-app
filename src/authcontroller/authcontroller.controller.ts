import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthService } from 'src/service/auth/auth.service';

@Controller('authcontroller')
export class AuthcontrollerController {
 private  authService:AuthService;
    constructor(authService: AuthService) {
        this.authService = authService;
    }
    @Post()
    createUser(){
        
    }
    @UseGuards(AuthGuard)
    @Get()
    getUsers(){
        return this.authService.getUsers();
    }
}
