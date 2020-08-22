import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector:    'app-dialog-error',
  templateUrl: './dialog-error.component.html',
  styleUrls:   ['../dialog.scss']
})
export class DialogErrorComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

}
