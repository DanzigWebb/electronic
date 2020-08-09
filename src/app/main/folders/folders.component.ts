import { Component, OnInit } from '@angular/core';
import { FoldersTemplate } from '@app/main/folders/folders';
import { FolderService, StoreService } from '@app/core/services/node';

const storeTpl = 'folders.template';

@Component({
  selector:    'app-folders',
  templateUrl: './folders.component.html',
  styleUrls:   ['./folders.component.scss']
})

export class FoldersComponent implements OnInit {

  template: FoldersTemplate = this.store.get(storeTpl) || 'list';

  constructor(
    private folder: FolderService,
    private store: StoreService
  ) {
  }

  ngOnInit(): void {
    this.folder.scan(this.store.defaultPath.getValue());
  }

  setTemplate(type: FoldersTemplate) {
    this.template = type;
  }
}
