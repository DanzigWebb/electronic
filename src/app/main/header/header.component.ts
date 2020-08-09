import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@app/core/services/sidebar/sidebar.service';
import { FolderService } from '@app/core/services';
import * as path from 'path';

@Component({
  selector:    'app-header',
  templateUrl: './header.component.html',
  styleUrls:   ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public sidebar: SidebarService,
    private folder: FolderService
  ) {
  }

  ngOnInit(): void {
  }

  back() {
    const currentPath = this.folder.dirFiles.value[0].absolutePath;
    const dir = path.dirname(path.dirname(currentPath));
    this.folder.scan(dir);
  }

}
