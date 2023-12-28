import { TestBed } from '@angular/core/testing';

import { BossManagerService } from './boss-manager.service';

describe('BossManagerService', () => {
  let service: BossManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BossManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
