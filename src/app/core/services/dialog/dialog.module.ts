import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PipesModule } from '@app/shared/pipe/pipes.module';

import { DialogNotifyComponent } from './dialog-notify/dialog-notify.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { DialogErrorComponent } from './dialog-error/dialog-error.component';
import { DialogSnackbarComponent } from './dialog-snackbar/dialog-snackbar.component';

@NgModule({
  declarations: [DialogNotifyComponent, DialogConfirmComponent, DialogErrorComponent, DialogSnackbarComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    PipesModule
  ],
  exports: []
})
export class DialogsModule {
}
