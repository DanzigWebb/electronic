import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { SettingsComponent } from './settings.component';
import { SettingsDefaultPathComponent } from './settings-main/settings-default-path/settings-default-path.component';
import { SettingsThemeComponent } from './settings-main/settings-theme/settings-theme.component';
import { SettingsOutputNameComponent } from './settings-translater/settings-output-name/settings-output-name.component';
import { SettingsFoldersComponent } from './settings-main/settings-folders/settings-folders.component';
import { SettingsTranslaterComponent } from './settings-translater/settings-translater.component';
import { SettingsMainComponent } from './settings-main/settings-main.component';


@NgModule({
  declarations: [
    SettingsComponent,
    SettingsDefaultPathComponent,
    SettingsThemeComponent,
    SettingsOutputNameComponent,
    SettingsFoldersComponent,
    SettingsTranslaterComponent,
    SettingsMainComponent
  ],
  imports:      [
    CommonModule,
    SharedModule
  ],
  exports:      [SettingsComponent]
})
export class SettingsModule {
}
