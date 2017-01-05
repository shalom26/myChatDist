import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {LoginSrvc} from "./login/login.service";
import { WallComponent } from './wall/wall.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import { MessageComponent } from './message/message.component';
import {WallSrvc} from "./wall/wall.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WallComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [LoginSrvc,WallSrvc],
  bootstrap: [AppComponent]
})
export class AppModule { }
