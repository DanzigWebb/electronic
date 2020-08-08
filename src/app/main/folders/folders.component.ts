import { Component, OnInit } from '@angular/core';
import { IFile } from '@app/core/services/folder/helpers/types';
import { FolderService } from '@app/core/services';

@Component({
  selector   : 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls  : ['./folders.component.scss']
})

export class FoldersComponent implements OnInit {

  files: IFile[] = []

  constructor(
    private folder: FolderService
  ) {
  }

  ngOnInit(): void {
    this.files = this.folder.scan('/Users/aleksandr/Documents/projects')
  }

}
