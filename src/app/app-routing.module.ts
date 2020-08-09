import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeRoutingModule } from './home/home-routing.module';

const routes: Routes = [
  {
    path:       '',
    redirectTo: 'folders',
    pathMatch:  'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
