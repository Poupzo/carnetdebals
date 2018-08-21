import { TestBed, inject } from '@angular/core/testing';

import { TypeChampionnatService } from './type-championnat.service';

describe('TypeChampionnatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeChampionnatService]
    });
  });

  it('should be created', inject([TypeChampionnatService], (service: TypeChampionnatService) => {
    expect(service).toBeTruthy();
  }));
});
