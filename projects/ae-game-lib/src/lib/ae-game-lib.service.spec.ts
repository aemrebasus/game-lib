import { TestBed } from '@angular/core/testing';

import { AeGameLibService } from './ae-game-lib.service';

describe('AeGameLibService', () => {
  let service: AeGameLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeGameLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
