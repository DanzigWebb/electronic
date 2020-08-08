import { Injectable } from '@angular/core';
import { checkFolderFiles } from './helpers/scan';
import { IFile } from './helpers/types';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor() {
  }

  scan(path: string): IFile[] {
    return checkFolderFiles(path);
  }

}
