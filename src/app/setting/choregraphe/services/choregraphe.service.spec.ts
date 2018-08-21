import { TestBed, inject } from '@angular/core/testing';

import { ChoregrapheService } from './choregraphe.service';

describe('ChoregrapheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChoregrapheService]
    });
  });

  it('should be created', inject([ChoregrapheService], (service: ChoregrapheService) => {
    expect(service).toBeTruthy();
  }));
});
