import { Component, OnInit } from '@angular/core';
import { FolderService } from '@app/core/services';
import { IFile } from '@app/core/services/folder/helpers/types';

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

  scanFile(file: IFile) {
    const {absolutePath, type} = file;
    if (type === 'folder') {
      this.folder.scan(absolutePath)
      return
    }
  }
}
