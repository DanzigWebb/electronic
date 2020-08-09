import { Injectable } from '@angular/core';
import { checkFolderFiles } from './helpers/scan';
import { IFile } from './helpers/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  public dirFiles: BehaviorSubject<IFile[]> = new BehaviorSubject([]);

  constructor() {
  }

  scan(path: string): void {
    const files: IFile[] = checkFolderFiles(path);
    this.dirFiles.next(files)
  }

}
