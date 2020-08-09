import { TestBed } from '@angular/core/testing';

import { FoldersTplService } from './folders-tpl.service';

describe('FoldersTplService', () => {
  let service: FoldersTplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoldersTplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
