import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTranslaterComponent } from './settings-translater.component';

describe('SettingsTranslaterComponent', () => {
  let component: SettingsTranslaterComponent;
  let fixture: ComponentFixture<SettingsTranslaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsTranslaterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTranslaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
