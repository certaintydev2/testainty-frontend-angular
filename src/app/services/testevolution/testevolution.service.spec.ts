import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TestevolutionService } from './testevolution.service';

describe('TestevolutionService', () => {
  let service: TestevolutionService;

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
    service = TestBed.inject(TestevolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
