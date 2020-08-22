import { Injectable } from '@angular/core';
import { extractTextFromHtml } from '@app/core/services/node/texter/extract/extract';
import { translateTextFromExel } from '@app/core/services/node/texter/translate/translate';
import { DialogService } from '@app/core/services';

@Injectable({
  providedIn: 'root'
})
export class TexterService {

  constructor(private dialog: DialogService) {
  }

  async extract(path: string): Promise<void> {
    await extractTextFromHtml(path);
    this.dialog.snackBar('текст вытянут!');
  }

  async translate(path: string) {
    await translateTextFromExel(path);
    this.dialog.snackBar('текст переведен!');
  }
}
