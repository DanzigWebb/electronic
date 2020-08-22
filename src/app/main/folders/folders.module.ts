import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoldersRoutingModule } from './folders-routing.module';
import { FoldersComponent } from './folders.component';
import { SharedModule } from '@app/shared/shared.module';
import { FolderSearchPipeModule } from './folder-search-pipe/folder-search-pipe.module';
import { GridComponent } from './template/grid/grid.component';
import { TemplateComponent } from './template/template.component';
import { ListComponent } from './template/list/list.component';
import { FoldersNavigationComponent } from './folders-navigation/folders-navigation.component';
import { FoldersPathComponent } from './folders-navigation/folders-path/folders-path.component';


@NgModule({
  declarations: [FoldersComponent, GridComponent, TemplateComponent, ListComponent, FoldersNavigationComponent, FoldersPathComponent],
  imports:      [
    CommonModule,
    FoldersRoutingModule,
    SharedModule,

    FolderSearchPipeModule
  ]
})
export class FoldersModule {
}
