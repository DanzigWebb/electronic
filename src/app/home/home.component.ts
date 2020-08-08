import { Component, OnInit } from '@angular/core';
import { FolderService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private folder: FolderService) { }

  ngOnInit(): void {
    console.log('fuuuuck');
    const folders = this.folder.scan('/Users/aleksandr/Documents/projects')
    console.log(folders);
  }

  getFolders() {

  }
}
