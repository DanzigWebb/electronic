import { Injectable } from '@angular/core';
import { extractTextFromHtml } from '@app/core/services/node/texter/extract/extract';
import { translateTextFromExel } from '@app/core/services/node/texter/translate/translate';

@Injectable({
  providedIn: 'root'
})
export class TexterService {

  constructor() {
  }

  extract(path: string): Promise<void> {
    return extractTextFromHtml(path);
  }

  translate(path: string) {
    translateTextFromExel(path)
  }
}
