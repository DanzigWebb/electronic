import { Injectable } from '@angular/core';
import { checkFolderFiles } from './helpers/scan';
import { IFile } from './helpers/types';
import { BehaviorSubject } from 'rxjs';

import * as path from 'path';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  public dirFiles: BehaviorSubject<IFile[]> = new BehaviorSubject([]);
  public dir: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
  }

  scan(path: string): void {
    this.dir.next(path);
    const files: IFile[] = checkFolderFiles(path);
    this.dirFiles.next(files);
  }

  back() {
    const dirPath = path.dirname(this.dir.value);
    this.scan(dirPath);
  }

}
