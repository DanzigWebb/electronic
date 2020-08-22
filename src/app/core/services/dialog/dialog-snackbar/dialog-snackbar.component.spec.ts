import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSnackbarComponent } from './dialog-snackbar.component';

describe('DialogSnackbarComponent', () => {
  let component: DialogSnackbarComponent;
  let fixture: ComponentFixture<DialogSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
