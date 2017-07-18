import { TestBed, inject } from '@angular/core/testing';
import { DraganddropService } from './draganddrop.service';

describe('DraganddropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DraganddropService]
    });
  });

  it('should ...', inject([DraganddropService], (service: DraganddropService) => {
    expect(service).toBeTruthy();
  }));
});
