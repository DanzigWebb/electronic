import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  state: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {
  }

  open() {
    this.state.next(true)
  }

  close() {
    this.state.next(false)
  }

  toggle() {
    this.state.next(!this.state.getValue())
  }
}
