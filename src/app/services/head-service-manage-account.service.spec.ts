import { TestBed } from '@angular/core/testing';

import { HeadServiceManageAccountService } from './head-service-manage-account.service';

describe('HeadServiceManageAccountService', () => {
  let service: HeadServiceManageAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadServiceManageAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
