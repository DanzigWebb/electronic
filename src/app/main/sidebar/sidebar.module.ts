import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from '@app/shared/shared.module';
import { SidebarFoldersComponent } from './sidebar-folders/sidebar-folders.component';


@NgModule({
  declarations: [
    SidebarComponent,
    SidebarFoldersComponent
  ],

  imports: [
    CommonModule,
    SharedModule
  ],

  exports: [
    SidebarComponent
  ]
})
export class SidebarModule {
}
