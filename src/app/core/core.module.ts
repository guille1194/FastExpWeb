import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule
    ],
    declarations: [
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
})

export class CoreModule {}