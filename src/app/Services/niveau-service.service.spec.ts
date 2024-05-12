import { TestBed } from '@angular/core/testing';

import { NiveauServiceService } from './niveau-service.service';

describe('NiveauServiceService', () => {
  let service: NiveauServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NiveauServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
