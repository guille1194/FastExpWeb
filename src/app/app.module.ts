import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routes';

import { customHttpProvider } from './helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


import { AlertComponent } from './directives/index';
import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService, PatientService } from './services/index';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { PatienttableComponent } from './components/patienttable/patienttable.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    PatienttableComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatTableModule,
    NgxQRCodeModule,
    APP_ROUTING
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    customHttpProvider,
    PatientService,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
