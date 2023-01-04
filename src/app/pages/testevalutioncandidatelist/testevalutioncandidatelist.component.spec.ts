import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { TestevalutioncandidatelistComponent } from './testevalutioncandidatelist.component';

describe('TestevalutioncandidatelistComponent', () => {
  let component: TestevalutioncandidatelistComponent;
  let fixture: ComponentFixture<TestevalutioncandidatelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestevalutioncandidatelistComponent ],
      imports:[
        HttpClientModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
      ],
      providers:[
        HttpClient,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestevalutioncandidatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
