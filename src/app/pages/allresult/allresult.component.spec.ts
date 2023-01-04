import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { AllresultComponent } from './allresult.component';

describe('AllresultComponent', () => {
  let component: AllresultComponent;
  let fixture: ComponentFixture<AllresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllresultComponent ],
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
    fixture = TestBed.createComponent(AllresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
