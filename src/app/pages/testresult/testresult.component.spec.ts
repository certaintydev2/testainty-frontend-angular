import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { TestresultComponent } from './testresult.component';

describe('TestresultComponent', () => {
  let component: TestresultComponent;
  let fixture: ComponentFixture<TestresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestresultComponent ],
      imports:[
        BrowserAnimationsModule,
        HttpClientModule,
        RouterTestingModule,
        FormsModule,              
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        ToastrModule.forRoot(),
      ],
      providers:[
        HttpClient,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
