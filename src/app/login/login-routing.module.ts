import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginConstants } from './shared/login.config';
import { LoginComponent } from './login-form/login-form.component';

const loginRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: {
            isLogin: true,
            title: LoginConstants.LOGIN_TITLE
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],

    exports: [
        RouterModule
    ]
})

export class LoginRoutingModule {}