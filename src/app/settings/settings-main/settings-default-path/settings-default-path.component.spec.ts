import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDefaultPathComponent } from './settings-default-path.component';

describe('SettingsDefaultPathComponent', () => {
  let component: SettingsDefaultPathComponent;
  let fixture: ComponentFixture<SettingsDefaultPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsDefaultPathComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDefaultPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
