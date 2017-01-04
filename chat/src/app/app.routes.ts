import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {WallComponent} from "./wall/wall.component"

export const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{path:'wall',component:WallComponent},
	{path: '**', redirectTo: 'login'}
];
