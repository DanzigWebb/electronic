import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ElectronService } from '@app/core/services';

const Store = window.require('electron-store');
const store = new Store({name: 'settings'});

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public defaultPath: BehaviorSubject<string>     = new BehaviorSubject(this.getPrivatePath());
  public theme: BehaviorSubject<string>           = new BehaviorSubject(StoreService.getTheme());
  public extendFolders: BehaviorSubject<string[]> = new BehaviorSubject(StoreService.getExtendFolders());

  constructor(private electron: ElectronService) {
  }

  changeTheme(type: string) {
    store.set('settings.theme', type);
    this.theme.next(type);
  }

  newDefaultPath(path: string) {
    store.set('settings.path', path);
    this.defaultPath.next(path);
  }

  addExtendFolder(path: string) {
    const storeFolders = store.get('settings.extendFolders');
    const updated      = [...storeFolders, path];
    store.set('settings.extendFolders', updated);
    this.extendFolders.next(updated);
  }

  removeExtendFolder(index: number) {
    const storeFolders = store.get('settings.extendFolders');
    storeFolders.splice(index, 1);
    store.set('settings.extendFolders', storeFolders);
    this.extendFolders.next(storeFolders);
  }

  get(param: string) {
    return store.get(`settings.${param}`);
  }

  set(param: string, value: any) {
    store.set(`settings.${param}`, value);
    return this.get(param);
  }

  private getPrivatePath() {
    return store.get('settings.path')
      ? store.get('settings.path')
      : this.electron.app.getPath('desktop');
  }

  private static getTheme() {
    return store.get('settings.theme')
      ? store.get('settings.theme')
      : 'dark';
  }

  private static getExtendFolders() {
    store.get('settings.extendFolders')
      ? store.get('settings.extendFolders')
      : store.set('settings.extendFolders', []);
    return store.get('settings.extendFolders');
  }
}
