import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { TestevaluationComponent } from './testevaluation.component';

describe('TestevaluationComponent', () => {
  let component: TestevaluationComponent;
  let fixture: ComponentFixture<TestevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestevaluationComponent ],
      imports:[
        HttpClientModule,
        RouterTestingModule,
        FormsModule,              
        ReactiveFormsModule,
        ToastrModule.forRoot(),

      ],
      providers: [
        HttpClient,
        { provide: ActivatedRoute,   useValue: ActivatedRoute    },
        { provide: Router,           useValue: Router            }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestevaluationComponent);
    component = fixture.componentInstance;
    console.log('component', component)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
