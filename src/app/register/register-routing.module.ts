import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterConstants } from './shared/register.config';
import { RegisterComponent } from './register-form/register-form.component';

const registerRoutes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
        data: {
            isSignup: true,
            title: RegisterConstants.REGISTER_TITLE
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(registerRoutes)
    ],

    exports: [
        RouterModule
    ]
})

export class RegisterRoutingModule {}
