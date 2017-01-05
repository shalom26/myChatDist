import {Component, OnInit, ElementRef, OnDestroy} from '@angular/core';
import {WallSrvc} from "./wall.service";
import {LoginSrvc} from "../login/login.service";
import {ViewChild} from "@angular/core/src/metadata/di";
import {Router} from "@angular/router";

@Component({
    selector: 'casific-wall',
    templateUrl: './wall.component.html',
    styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit,OnDestroy{
    private msgs;
    private newMsgInput:string;
    private currUser;
    private intrv;
   private avatarUrl;

    constructor(private wallSrvc:WallSrvc,private logingSrvc:LoginSrvc,private router:Router) {
    }

    @ViewChild('scroll') scroll:ElementRef;

    ngOnInit() {
        this.intrv = setInterval(()=>{
            this.wallSrvc.getAllmsg().then((res:any)=>{
                this.msgs = res;
            })
        },2500);

        this.currUser = this.logingSrvc.getCurrUser();
       this.avatarUrl = this.logingSrvc.getCurrAvatar();

        if(!this.currUser){
            this.router.navigate(['/login']);
        }
    }

    ngOnDestroy(){
        clearInterval(this.intrv);
    }



    newMsg(){
        let obj = {user:this.currUser.name,avatarUrl:this.avatarUrl.url,msg:this.newMsgInput};
        this.wallSrvc.sendMsg(obj).subscribe((res)=>{
            this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
            this.msgs.push(Object.assign({flag:true},obj));
            this.newMsgInput = '';
        },(err)=>{console.log(err)})
    }
}
