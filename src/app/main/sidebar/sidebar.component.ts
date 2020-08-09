import { Component, OnInit } from '@angular/core';
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
  ) {
  }

  ngOnInit(): void {

  }

  openBottomSheet(): void {
    this._bottomSheet.open(SettingsComponent, {
      panelClass: 'settings-sheet'
    });
  }
}
