import {Routes,RouterModule} from '@angular/router';

import {LoginComponent} from './login-component/login-component.component';
import { AppComponent } from './app.component';

const routes:Routes = [
    {
        path:'main',
        component:AppComponent
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      }
]