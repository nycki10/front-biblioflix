import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Register } from './register/register';
import { Login } from './login/login';
import { CreatBook } from './creat-book/creat-book';
import { LandingPage } from './landing-page/landing-page';
import {Screen } from './screen/screen';
import {Favorite } from './favorite/favorite';



export const routes: Routes = [
    {path: '',component: LandingPage},
    {path: 'home',component: Home},
    {path: 'createbook',component: CreatBook},
    {path: 'register',component: Register},
    {path: 'login',component: Login},
    {path: 'screen',component: Screen},
    {path: 'favorite',component: Favorite}
];
