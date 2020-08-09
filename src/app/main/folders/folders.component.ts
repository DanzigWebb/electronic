import { Component, OnInit } from '@angular/core';
import { FolderService } from '@app/core/services';
import { StoreService } from '@app/core/services/store/store.service';

const {shell} = window.require('electron');

type foldersTpl = 'list' | 'grid'
const storeTpl = 'folders.template';

@Component({
  selector:    'app-folders',
  templateUrl: './folders.component.html',
  styleUrls:   ['./folders.component.scss']
})

export class FoldersComponent implements OnInit {

  template: foldersTpl = this.store.get(storeTpl) || 'list';

  constructor(
    private folder: FolderService,
    private store: StoreService
  ) {
  }

  ngOnInit(): void {
    this.folder.scan(this.store.defaultPath.getValue());
  }

  setTemplate(type: foldersTpl) {
    this.store.set(storeTpl, type);
    this.template = type;
  }

  openFolder() {
    shell.showItemInFolder(this.folder.dir.getValue());
  }

  updateFolder() {
    this.folder.update();
  }
}
