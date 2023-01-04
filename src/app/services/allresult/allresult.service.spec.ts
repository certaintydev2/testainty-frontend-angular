import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AllresultService } from './allresult.service';

describe('AllresultService', () => {
  let service: AllresultService;

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
    service = TestBed.inject(AllresultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
