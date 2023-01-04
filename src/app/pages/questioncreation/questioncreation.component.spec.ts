import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule , } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'


import { QuestioncreationComponent } from './questioncreation.component';

describe('QuestioncreationComponent', () => {
  let component: QuestioncreationComponent;
  let fixture: ComponentFixture<QuestioncreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestioncreationComponent ],
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
    fixture = TestBed.createComponent(QuestioncreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
