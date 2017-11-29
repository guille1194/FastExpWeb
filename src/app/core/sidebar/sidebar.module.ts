import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {Sidebar} from './sidebar.component';
import {SidebarRoutingModule} from './sidebar-routing.module';

@NgModule({
	imports: [
		CommonModule,
		SidebarRoutingModule,
    FormsModule,
	],
	declarations: [
		Sidebar
	]
})
export class SidebarModule {}
