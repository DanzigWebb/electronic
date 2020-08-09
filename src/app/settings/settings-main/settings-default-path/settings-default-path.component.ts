import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StoreService } from '@app/core/services/node/store/store.service';

const {dialog} = window.require('electron').remote;

@Component({
  selector:    'app-settings-default-path',
  templateUrl: './settings-default-path.component.html',
  styleUrls:   ['../../settings.component.scss']
})
export class SettingsDefaultPathComponent implements OnInit {

  public storeDefaultPath: string = this.store.defaultPath.value;

  constructor(
    public store: StoreService,
    private ref: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
  }

  setDefaultPath() {
    const dialogRef = dialog.showOpenDialog({buttonLabel: 'Выберете папку', properties: ['openDirectory']});
    dialogRef.then(({filePaths}) => {
      const [path] = filePaths;
      if (!path) {
        return;
      }
      this.store.newDefaultPath(path);
      this.storeDefaultPath = path;
      this.ref.detectChanges();
    });
  }
}
