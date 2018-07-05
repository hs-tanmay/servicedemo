import { TestBed, inject } from '@angular/core/testing';

import { BookinformationService } from './bookinformation.service';

describe('BookinformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookinformationService]
    });
  });

  it('should be created', inject([BookinformationService], (service: BookinformationService) => {
    expect(service).toBeTruthy();
  }));
});
