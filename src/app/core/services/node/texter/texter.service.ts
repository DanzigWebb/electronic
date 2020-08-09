import { Injectable } from '@angular/core';
import { extractTextFromHtml } from '@app/core/services/node/texter/helpers/extract';

@Injectable({
  providedIn: 'root'
})
export class TexterService {

  constructor() {
  }

  extract(path: string): Promise<void> {
    return extractTextFromHtml(path);
  }
}
