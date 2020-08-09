import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StoreService } from '@app/core/services/store/store.service';
import * as path from 'path';

const {dialog} = window.require('electron').remote;

@Component({
  selector:    'app-settings-folders',
  templateUrl: './settings-folders.component.html',
  styleUrls:   ['../../settings.component.scss']
})
export class SettingsFoldersComponent implements OnInit {

  public folders: string[] = this.store.extendFolders.value;

  constructor(private store: StoreService) {
  }

  ngOnInit(): void {
    this.store.extendFolders.subscribe(folders => this.folders = folders);
  }

  createNewFolder() {
    const dialogRef = dialog.showOpenDialog({buttonLabel: 'Выберете папку', properties: ['openDirectory']});
    dialogRef.then(({filePaths}) => {
      const [path] = filePaths;
      if (!path) {
        return;
      }
      this.store.addExtendFolder(path);
    });
  }

  removeFolder(index: number) {
    this.store.removeExtendFolder(index);
  }

  getNameFolder(folderPath) {
    return path.basename(folderPath);
  }
}
