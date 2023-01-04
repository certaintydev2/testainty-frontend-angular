import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AllcandidatesComponent } from './allcandidates.component';
import { SearchPipe } from '../../pipes/search/search.pipe';

describe('AllcandidatesComponent', () => {
  let component: AllcandidatesComponent;
  let fixture: ComponentFixture<AllcandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcandidatesComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,               // << ----- add this line
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
      ],
      providers: [
        ToastrService,
        SearchPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
