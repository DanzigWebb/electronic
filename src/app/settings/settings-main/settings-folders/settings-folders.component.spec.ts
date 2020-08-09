import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFoldersComponent } from './settings-folders.component';

describe('SettingsFoldersComponent', () => {
  let component: SettingsFoldersComponent;
  let fixture: ComponentFixture<SettingsFoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsFoldersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
