import { TestBed, inject } from '@angular/core/testing';

import { EpoqueService } from './epoque.service';

describe('EpoqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpoqueService]
    });
  });

  it('should be created', inject([EpoqueService], (service: EpoqueService) => {
    expect(service).toBeTruthy();
  }));
});
