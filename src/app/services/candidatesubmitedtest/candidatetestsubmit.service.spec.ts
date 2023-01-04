import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CandidatetestsubmitService } from './candidatetestsubmit.service';

describe('CandidatetestsubmitService', () => {
  let service: CandidatetestsubmitService;

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
    service = TestBed.inject(CandidatetestsubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
