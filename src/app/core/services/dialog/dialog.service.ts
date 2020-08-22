import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogNotifyComponent } from './dialog-notify/dialog-notify.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from './dialog-error/dialog-error.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogSnackbarComponent } from '@app/core/services/dialog/dialog-snackbar/dialog-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
  }

  notify(message = ''): void {
    this._dialog.open(DialogNotifyComponent, {
      data: {message}
    });
  }

  error(message = ''): void {
    this._dialog.open(DialogErrorComponent, {
      data: {message}
    });
  }

  confirm(message: string = 'Вы уверены?', disableClose = true): Promise<boolean | undefined> {
    return new Promise(resolve => {
      const dialogRef = this._dialog.open(DialogConfirmComponent, {
        data: {message},
        disableClose
      });

      dialogRef.afterClosed().subscribe(result => {
        resolve(result);
      });
    });
  }

  snackBar(message = '', duration = 5000) {
    this._snackBar.openFromComponent(DialogSnackbarComponent, {
      duration,
      data: message
    });
  }
}
