import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from '@app/main/folders/template/template.component';

@Component({
  selector: 'folders-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends TemplateComponent implements OnInit {
}
