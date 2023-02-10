import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req, res) {
    if (!req.user) {
      return 'No user from google';
    }


    console.log(req.user);

    res.redirect('https://www.google.com')

   
  }
}
