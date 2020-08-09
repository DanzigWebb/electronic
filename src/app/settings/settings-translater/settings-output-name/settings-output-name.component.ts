import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StoreService } from '@app/core/services/store/store.service';

@Component({
  selector:    'app-settings-output-name',
  templateUrl: './settings-output-name.component.html',
  styleUrls:   ['../../settings.component.scss']
})
export class SettingsOutputNameComponent implements OnInit {

  public outputFile: FormControl = new FormControl('');
  public outputFileDefault: string = this.store.get('outputName') || 'translate.html';

  constructor(private store: StoreService) {
  }

  ngOnInit(): void {
    this.outputFile.setValue(this.outputFileDefault);
  }

  changeOutputName() {
    this.store.set('outputName', this.outputFile.value);
    this.outputFile.reset(this.outputFile.value);
  }
}
