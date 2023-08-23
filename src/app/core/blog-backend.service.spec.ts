import { TestBed } from '@angular/core/testing';

import { BlogBackendService } from './blog-backend.service';

describe('BlogBackendService', () => {
  let service: BlogBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
