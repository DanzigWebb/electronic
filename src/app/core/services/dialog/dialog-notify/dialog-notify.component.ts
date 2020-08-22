import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector:    'app-dialog-notify',
  templateUrl: './dialog-notify.component.html',
  styleUrls:   ['../dialog.scss']
})
export class DialogNotifyComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

}
