import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/index';
import { PatienttableComponent } from './components/patienttable/patienttable.component';

const APP_ROUTES: Routes = [
   { path: 'patient', component: PatienttableComponent },
   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
   { path: '', component: LoginComponent },
   { path: 'register', component: RegisterComponent },

   { path: '**', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
