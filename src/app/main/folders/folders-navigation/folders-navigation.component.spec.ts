import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersNavigationComponent } from './folders-navigation.component';

describe('FoldersNavigationComponent', () => {
  let component: FoldersNavigationComponent;
  let fixture: ComponentFixture<FoldersNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldersNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
