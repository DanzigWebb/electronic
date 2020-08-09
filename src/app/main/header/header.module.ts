import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SharedModule } from '@app/shared/shared.module';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSearchComponent],

  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],

  exports: [
    HeaderComponent]
})
export class HeaderModule {
}
