import { TestBed } from '@angular/core/testing';

import { DemoService } from './demo.service';
import { get } from 'http';

describe('DemoService', () => {
  let service: DemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  get
});
