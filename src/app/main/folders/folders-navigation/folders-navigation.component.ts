import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FolderService } from '@app/core/services';
import { StoreService } from '@app/core/services/store/store.service';
import { FoldersTplService } from '@app/main/folders/folders-tpl.service';
import { FormControl } from '@angular/forms';
import { FoldersTemplate } from '@app/main/folders/folders';

const {shell} = window.require('electron');

const storeTpl = 'folders.template';

@Component({
  selector:    'app-folders-navigation',
  templateUrl: './folders-navigation.component.html',
  styleUrls:   ['./folders-navigation.component.scss']
})
export class FoldersNavigationComponent implements OnInit {

  @Output() changeTpl: EventEmitter<FoldersTemplate> = new EventEmitter<FoldersTemplate>();

  public template: FoldersTemplate = this.store.get(storeTpl) || 'list';
  public searchCtl: FormControl = new FormControl();

  constructor(
    private folder: FolderService,
    private store: StoreService,
    private foldersTpl: FoldersTplService
  ) {
  }

  ngOnInit(): void {
    this.searchCtl.valueChanges.subscribe(
      val => this.foldersTpl.searchInput.next(val)
    );

    this.folder.dirFiles.subscribe(
      () => this.searchCtl.reset()
    );
  }

  setTemplate(type: FoldersTemplate) {
    this.store.set(storeTpl, type);
    this.template = type;
    this.changeTpl.emit(type)
  }

  openFolder() {
    shell.showItemInFolder(this.folder.dir.getValue());
  }

  updateFolder() {
    this.folder.update();
  }

}
