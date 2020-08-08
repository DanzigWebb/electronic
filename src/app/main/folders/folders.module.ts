import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoldersRoutingModule } from './folders-routing.module';
import { FoldersComponent } from './folders.component';
import { SharedModule } from '@app/shared/shared.module';
import { FolderSearchPipeModule } from './folder-search-pipe/folder-search-pipe.module';


@NgModule({
  declarations: [FoldersComponent],
  imports     : [
    CommonModule,
    FoldersRoutingModule,
    SharedModule,

    FolderSearchPipeModule
  ]
})
export class FoldersModule {
}
