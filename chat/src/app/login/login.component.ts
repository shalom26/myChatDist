import { Component, OnInit } from '@angular/core';
import {LoginSrvc} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'casific-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login: string = '';
  private avatars = [];
  private selectedAvatar;

  constructor(private loginSrvc: LoginSrvc, private router: Router) {
  }

  ngOnInit() {
    for (let i = 1; i < 13; i++) {
      this.avatars.push({
        id: i,
        url: '../../assets/img/' + i + '.png',
        isChoose: false
      });
    }
  }

  userLogin(user) {
    if(this.selectedAvatar) {
      this.loginSrvc.loginToChat(user,this.selectedAvatar).then((user)=> {
        this.loginSrvc.setCurrUser(user,this.selectedAvatar);
        this.router.navigate(['/wall']);
      })
    }
  }

  chooseAvatar(avatar) {
    if(this.selectedAvatar){
      this.selectedAvatar.isChoose = false ;
    }
    avatar.isChoose = true;
    this.selectedAvatar = avatar;
  }
}
