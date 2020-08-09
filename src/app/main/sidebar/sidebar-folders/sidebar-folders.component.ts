import { Component, OnInit } from '@angular/core';
import { StoreService } from '@app/core/services/node/store/store.service';
import { FolderService } from '@app/core/services/node';
import { ElectronService } from '@app/core/services';

@Component({
  selector:    'app-sidebar-folders',
  templateUrl: './sidebar-folders.component.html',
  styleUrls:   ['./sidebar-folders.component.scss']
})
export class SidebarFoldersComponent implements OnInit {

  defaultDir: string = this.store.defaultPath.getValue();

  constructor(
    public store: StoreService,
    public folder: FolderService,
    private electron: ElectronService
  ) {
  }

  ngOnInit(): void {
  }

  getDefault() {
    this.folder.scan(this.store.defaultPath.getValue())
  }

  getFolder(name: 'desktop' | 'documents' | 'downloads'): void {
    const path = this.electron.app.getPath(name);
    this.folder.scan(path);
  }
}
