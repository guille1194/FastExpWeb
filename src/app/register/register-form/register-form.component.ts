import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../shared/register.service';
import { RegisterModel } from '../shared/register.model';

@Component({
    selector: 'app-register',
    templateUrl: './register-form.component.html',
})
export class RegisterComponent implements OnInit {
    formGroup: FormGroup;
    formBuilder: FormBuilder;
    user: RegisterModel = new RegisterModel();

    constructor(@Inject(FormBuilder) formBuilder: FormBuilder,
                private registerService: RegisterService){
        this.formBuilder = formBuilder;
    }

    ngOnInit(){
        this.validateInputs(this.formBuilder);
    }

    validateInputs(formBuilder: FormBuilder) {
        this.formGroup = formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required],
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required]
        });
    }

    register(){
        this.registerService.signUp(this.user.userName, this.user.password, this.user.name, this.user.lastName, this.user.email)
            .subscribe(
                data => {
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}
