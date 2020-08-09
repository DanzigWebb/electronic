import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeaderService } from '@app/main/header/header.service';
import { FolderService } from '@app/core/services';

@Component({
  selector:    'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls:   ['../header.component.scss']
})
export class HeaderSearchComponent implements OnInit {

  control: FormControl = new FormControl('');

  constructor(
    private header: HeaderService,
    private folder: FolderService
  ) {
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.header.searchInput.next(value);
    });

    this.folder.dirFiles.subscribe(
      () => this.control.reset()
    );
  }

}
