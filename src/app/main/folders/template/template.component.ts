import { Component, OnInit } from '@angular/core';
import { FolderService } from '@app/core/services';
import { HeaderService } from '@app/main/header/header.service';
import { IFile } from '@app/core/services/folder/helpers/types';
import { FoldersTplService } from '@app/main/folders/folders-tpl.service';

@Component({
  template: '',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(
    public folder: FolderService,
    public search: FoldersTplService,
    public header: HeaderService,
  ) {
  }

  ngOnInit(): void {
  }

  scanFile(file: IFile) {
    const {absolutePath, type} = file;
    if (type === 'folder') {
      this.folder.scan(absolutePath);
      return;
    }
  }
}
