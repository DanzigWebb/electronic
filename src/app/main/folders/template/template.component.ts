import { Component, OnInit } from '@angular/core';
import { HeaderService } from '@app/main/header/header.service';
import { FoldersTplService } from '@app/main/folders/folders-tpl.service';
import { IFile } from '@app/core/services/node/folder/helpers/types';
import { FolderService } from '@app/core/services/node';
import { TexterService } from '@app/core/services/node/texter/texter.service';

@Component({
  template:  '',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(
    public folder: FolderService,
    public search: FoldersTplService,
    public header: HeaderService,
    private texter: TexterService
  ) {
  }

  ngOnInit(): void {
  }

  scanFile(file: IFile) {
    const {absolutePath, type} = file;
    switch (type) {
      case 'folder':
        this.folder.scan(absolutePath);
        return;
      case 'html':
        this.extractText(absolutePath);
        return
    }
  }

  async extractText(absolutePath: string) {
    await this.texter.extract(absolutePath);
    this.folder.update();
  }
}
