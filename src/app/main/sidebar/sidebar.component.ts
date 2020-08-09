import { Component, OnInit } from '@angular/core';
import { ElectronService, FolderService } from '@app/core/services';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SettingsComponent } from '@app/settings/settings.component';

@Component({
  selector:    'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls:   ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private _bottomSheet: MatBottomSheet,
    public folder: FolderService,
    private electron: ElectronService
  ) {
  }

  ngOnInit(): void {
    if (!this.folder.dirFiles.value.length) {
      this.getFolder('desktop');
    }
  }

  getFolder(name: 'desktop' | 'documents' | 'downloads'): void {
    const path = this.electron.app.getPath(name);
    this.folder.scan(path);
  }

  openBottomSheet(): void {
    this._bottomSheet.open(SettingsComponent, {
      panelClass: 'settings-sheet'
    });
  }
}
