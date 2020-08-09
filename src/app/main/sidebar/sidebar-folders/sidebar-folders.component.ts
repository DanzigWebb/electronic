import { Component, OnInit } from '@angular/core';
import { ElectronService, FolderService } from '@app/core/services';
import { StoreService } from '@app/core/services/store/store.service';

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
