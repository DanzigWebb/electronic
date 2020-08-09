import { Component, OnInit } from '@angular/core';
import { FolderService } from '@app/core/services';

@Component({
  selector   : 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls  : ['./folders.component.scss']
})

export class FoldersComponent implements OnInit {

  constructor(
    public folder: FolderService
  ) {
  }

  ngOnInit(): void {
  }

}
