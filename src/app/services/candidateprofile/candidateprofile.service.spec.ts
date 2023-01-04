import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CandidateprofileService } from './candidateprofile.service';

describe('CandidateprofileService', () => {
  let service: CandidateprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        RouterTestingModule,
      ],
      providers:[
        HttpClient,
      ]
    });
    service = TestBed.inject(CandidateprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
