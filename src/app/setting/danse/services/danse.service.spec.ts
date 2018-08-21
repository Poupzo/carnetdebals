import { TestBed, inject } from '@angular/core/testing';

import { DanseService } from './danse.service';

describe('DanseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DanseService]
    });
  });

  it('should be created', inject([DanseService], (service: DanseService) => {
    expect(service).toBeTruthy();
  }));
});
