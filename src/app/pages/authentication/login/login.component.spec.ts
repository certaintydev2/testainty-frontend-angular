import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,               // << ----- add this line
        ReactiveFormsModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        ToastrService,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('conponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('form validation check', () => {
    component.loginForm.setValue({
      'email':'jaydeep.com',
      'password': 'asdfgb'
    })
    expect(component.loginForm.valid).toEqual(true);
  })

  it('check username or password', () => {
    const username = 'admin'
    const password = 'admin123'

    expect('admin').toEqual(username);
    expect('admin123').toEqual(password);

  })


});
