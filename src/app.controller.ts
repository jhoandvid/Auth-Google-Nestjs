import { GoogleOAuthGuard } from './guard/google-auth.guard';
import { Controller, Get, Request, Response, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req, @Response() res) {
    console.log(req)
  }

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req,  @Response() res) {
    return this.appService.googleLogin(req, res);
  }
}