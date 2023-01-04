import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { BackdoreentryGuard } from './backdoreentry.guard';

describe('BackdoreentryGuard', () => {
  let guard: BackdoreentryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
      ],
      providers:[
        HttpClient,
      ]
    });
    guard = TestBed.inject(BackdoreentryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
