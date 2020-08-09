import { Component, OnInit } from '@angular/core';
import { FolderService } from '@app/core/services';
import { StoreService } from '@app/core/services/store/store.service';
import { FoldersTemplate } from '@app/main/folders/folders';

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
