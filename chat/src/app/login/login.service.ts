import {Component, OnInit, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


@Injectable()

export class LoginSrvc implements OnInit {
    protected currUser;
    private avatar;

    constructor(private http: Http) {
    }

    ngOnInit() {
    }

    loginToChat(user,avatar){
      return this.http.post('/login', {name:user,avatar:avatar})
        .map(res=>res.json()).toPromise()
    }

    setCurrUser(user,avatar) {
      this.avatar = avatar;
      this.currUser = user;
    }

    getCurrUser() {
        return this.currUser;
    }

    getCurrAvatar(){
      return this.avatar;
    }
}
