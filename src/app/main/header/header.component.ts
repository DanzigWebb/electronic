import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@app/core/services/sidebar/sidebar.service';
import { FolderService } from '@app/core/services';

@Component({
  selector:    'app-header',
  templateUrl: './header.component.html',
  styleUrls:   ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public sidebar: SidebarService,
    public folder: FolderService
  ) {
  }

  ngOnInit(): void {
  }

}
