import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MyIslandComponent } from './my-island/my-island.component';
import { NewIslandComponent } from './new-island/new-island.component';
import { ViewIslandComponent } from './view-island/view-island.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const unauthorized = () => redirectUnauthorizedTo(['login']);
const loggedIn = () => redirectLoggedInTo(['/']);

export const routes: Routes = [
  { path: '', component: HomepageComponent, ...canActivate(unauthorized)  },
  { path: 'login', component:  LoginComponent, ...canActivate(loggedIn)},
  { path: 'islands/my', component: MyIslandComponent, ...canActivate(unauthorized) },
  { path: 'islands/new', component:  NewIslandComponent, ...canActivate(unauthorized) },
  { path: 'islands/:id', component:  ViewIslandComponent, ...canActivate(unauthorized)},
];

