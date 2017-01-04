import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {LoginSrvc} from "../login/login.service";

@Component({
    selector: 'casific-message',
    template: `
            <div class="row">
                <span><img [src]="msg.avatarUrl" class="text-avatar">{{msg.user}}: {{msg.msg}}</span>
            </div>`,
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    @Input() msg;

    constructor(private loginSrvc:LoginSrvc) {
    }

    ngOnInit() {
    }

}
