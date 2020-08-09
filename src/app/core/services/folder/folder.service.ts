import { Injectable } from '@angular/core';
import { checkFolderFiles } from './helpers/scan';
import { IFile } from './helpers/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  public currentFolder: BehaviorSubject<IFile[]> = new BehaviorSubject([]);

  constructor() {
  }

  scan(path: string): void {
    this.currentFolder.next(checkFolderFiles(path))
  }

}
