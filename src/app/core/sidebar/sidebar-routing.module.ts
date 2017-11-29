import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router'
import {Sidebar} from './sidebar.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component: Sidebar}
		])
	],
	exports: [
		RouterModule
	]
})
export class SidebarRoutingModule {}
