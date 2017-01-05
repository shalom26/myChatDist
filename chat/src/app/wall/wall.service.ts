import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


@Injectable()

export class WallSrvc  {

  constructor(private http:Http) { }


  sendMsg(msg){
    console.log('msg',msg);
    return this.http.post('/msg',msg)
        .map((res)=> res.json())
    }

  getAllmsg(){
    return this.http.get('/msg')
        .map((res)=> res.json())
        .toPromise()
  }
}
