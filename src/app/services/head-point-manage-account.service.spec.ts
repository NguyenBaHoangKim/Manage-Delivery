import { TestBed } from '@angular/core/testing';

import { HeadPointManageAccountService } from './head-point-manage-account.service';

describe('HeadPointManageAccountService', () => {
  let service: HeadPointManageAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadPointManageAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
