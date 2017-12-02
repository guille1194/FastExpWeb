import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';

import {LoginModule} from './login/login.module';
import {RegisterModule} from './register/register.module';
import {PatientModule} from './patient/patient.module';

import {HttpClientModule} from '@angular/common/http';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatToolbarModule, MatListModule } from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        FormsModule,
        HttpModule,
        LoginModule,
        RegisterModule,
        PatientModule,
        HttpClientModule,
        NgxQRCodeModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
