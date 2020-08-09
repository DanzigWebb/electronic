import { TestBed } from '@angular/core/testing';

import { TexterService } from './texter.service';

describe('TexterService', () => {
  let service: TexterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TexterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
