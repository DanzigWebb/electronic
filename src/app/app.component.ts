import { Component } from '@angular/core';
import { SidebarService } from '@app/core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public sidebar: SidebarService
  ) {
  }
}
