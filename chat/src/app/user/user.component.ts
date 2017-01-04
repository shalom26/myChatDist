import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'casific-user',
  template: `<div>{{user}}</div>`,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user;
  @Input()avatar;

  constructor() { }

  ngOnInit() {
  }

}
