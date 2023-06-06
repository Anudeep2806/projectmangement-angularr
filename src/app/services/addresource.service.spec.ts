import { TestBed } from '@angular/core/testing';

import { AddresourceService } from './addresource.service';

describe('AddresourceService', () => {
  let service: AddresourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddresourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
