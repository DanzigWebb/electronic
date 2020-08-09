import { Component, OnInit } from '@angular/core';
import { StoreService } from '@app/core/services/node/store/store.service';

@Component({
  selector:    'app-settings-theme',
  templateUrl: './settings-theme.component.html',
  styleUrls:   ['../../settings.component.scss']
})
export class SettingsThemeComponent implements OnInit {

  public theme: string = this.store.theme.value;

  constructor(
    private store: StoreService
  ) {
  }

  ngOnInit(): void {
    this.store.theme.subscribe(type => this.theme = type);
  }

  changeTheme(checked: boolean) {
    const type: string = checked ? 'dark' : 'light';
    this.store.changeTheme(type);
  }

}
