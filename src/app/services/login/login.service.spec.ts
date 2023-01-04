import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      BrowserAnimationsModule,
        RouterTestingModule,
        FormsModule,               // << ----- add this line
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
      
      ],
      providers: [
        HttpClient,
        { provide: ActivatedRoute,   useValue: ActivatedRoute    },
        { provide: Router,           useValue: Router            }
      ],
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
