import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../shared/login.service';
import { LoginModel } from '../shared/login.model';

@Component({
    selector: 'app-login',
    templateUrl: './login-form.component.html',
})
export class LoginComponent implements OnInit {
    formGroup: FormGroup;
    formBuilder: FormBuilder;
    user: LoginModel = new LoginModel();

    constructor(@Inject(FormBuilder) formBuilder: FormBuilder,
                private loginService: LoginService){
        this.formBuilder = formBuilder;
    }

    ngOnInit(){
        this.validateInputs(this.formBuilder);
    }

    validateInputs(formBuilder: FormBuilder) {
        this.formGroup = formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login(){
        this.loginService.signIn(this.user.userName, this.user.password)
            .subscribe(
                data => {
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}
