import { Component, OnInit } from '@angular/core';
import { FolderService } from '@app/core/services/node';
import * as path from 'path';

@Component({
  selector:    'app-folders-path',
  templateUrl: './folders-path.component.html',
  styleUrls:   ['./folders-path.component.scss']
})
export class FoldersPathComponent implements OnInit {

  links: string[] = [];

  constructor(public folder: FolderService) {
  }

  ngOnInit(): void {
    this.generateNavigation();
  }

  generateNavigation() {
    this.folder.dir.subscribe(
      _ => this.links = this.folder.currentDir.split('/').slice(1)
    )
  }

  navigateTo(link: string) {
    const {sep} = path;

    const separated = this.folder.currentDir.split(sep);
    const index = separated.findIndex(item => item === link);
    const pathTo = separated.slice(0, index + 1).join(sep);

    this.folder.scan(pathTo);
  }
}
