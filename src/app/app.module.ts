import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderModule } from '@app/main/header/header.module';
import { SidebarModule } from '@app/main/sidebar/sidebar.module';
import { FoldersModule } from '@app/main/folders/folders.module';
import { SettingsModule } from '@app/settings/settings.module';


@NgModule({
  declarations: [AppComponent],
  imports:      [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HeaderModule,
    FoldersModule,
    SettingsModule,
    AppRoutingModule,
    SidebarModule
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
