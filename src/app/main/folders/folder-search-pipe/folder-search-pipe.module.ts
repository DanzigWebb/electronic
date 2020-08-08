import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderSearchPipe } from './folder-search.pipe';

@NgModule({
  declarations: [FolderSearchPipe],
  imports     : [
    CommonModule
  ],
  exports     : [FolderSearchPipe]
})
export class FolderSearchPipeModule {
}
