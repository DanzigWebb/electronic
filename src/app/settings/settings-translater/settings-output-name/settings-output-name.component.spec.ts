import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsOutputNameComponent } from './settings-output-name.component';

describe('SettingsOutputNameComponent', () => {
  let component: SettingsOutputNameComponent;
  let fixture: ComponentFixture<SettingsOutputNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsOutputNameComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsOutputNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
