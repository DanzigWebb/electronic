import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from '@app/main/folders/template/template.component';

@Component({
  selector: 'folders-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent extends TemplateComponent implements OnInit {
}
