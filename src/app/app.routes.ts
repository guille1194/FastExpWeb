import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/index';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },

   { path: '**', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
