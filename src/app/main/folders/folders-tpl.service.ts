import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoldersTplService {

  public searchInput: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }
}
