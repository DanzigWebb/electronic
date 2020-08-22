import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector:    'app-dialog-snackbar',
  templateUrl: './dialog-snackbar.component.html',
  styleUrls:   ['../dialog.scss']
})
export class DialogSnackbarComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private _snackRef: MatSnackBarRef<DialogSnackbarComponent>
  ) {
  }

  close() {
    this._snackRef.dismissWithAction();
  }
}
