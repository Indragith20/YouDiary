import {Routes,RouterModule} from '@angular/router';

import {LoginComponent} from './login-component/login-component.component';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';

const routes:Routes = [
    {
        path:'main',
        component:AppComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      }
]

export const routing = RouterModule.forRoot(routes);