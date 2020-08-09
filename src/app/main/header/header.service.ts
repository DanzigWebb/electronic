import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  searchInput: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
  }
}
