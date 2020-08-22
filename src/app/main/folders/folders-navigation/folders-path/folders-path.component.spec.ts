import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersPathComponent } from './folders-path.component';

describe('FoldersPathComponent', () => {
  let component: FoldersPathComponent;
  let fixture: ComponentFixture<FoldersPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldersPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
