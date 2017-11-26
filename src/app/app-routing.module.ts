import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'register', redirectTo:'/register' },
   { path: 'patients', redirectTo: '/patients', pathMatch: 'full'}
];

@NgModule({
   imports: [
      RouterModule.forRoot(appRoutes)
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule { }
