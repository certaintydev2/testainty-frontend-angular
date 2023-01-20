import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AllcandidatesComponent } from './allcandidates.component';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { AllresultService } from 'src/app/services/allresult/allresult.service';

import { CandidateInterFace } from "./candidate-inter-face";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table'


describe('AllcandidatesComponent', () => {
  let component: AllcandidatesComponent;
  let fixture: ComponentFixture<AllcandidatesComponent>;
  let service: AllresultService;
  let h2: HTMLElement;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllcandidatesComponent],
      imports: [
        RouterTestingModule,
        FormsModule,               // << ----- add this line
        ReactiveFormsModule,
        HttpClientTestingModule,
        HttpClientModule,
        MatTableModule,
        ToastrModule.forRoot(),

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],

      providers: [
        ToastrService,
        SearchPipe
      ]
    })
      .compileComponents();

    service = TestBed.inject(AllresultService);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should api call is working', inject([AllresultService], async (myService: AllresultService) => {
    const result = await myService.seeAllCandidates()
    expect(result).toBeTruthy();
  })
  )

  // it('should api call is working', () => {
  //   (done: DoneFn) => {
  //     service.seeAllCandidates().subscribe(value => {
  //       expect(value).toBeTruthy();
  //       done();
  //     })
  //   }
  // })

  it('should call api and check data flow ', () => {
    let response: CandidateInterFace[] = [];
    service.seeAllCandidates().subscribe((res: any) => {
      console.log('call api test case =>', res.Candidates[0]);
      expect(response).toEqual(res.Candidates[0]);
    })
  });


  it('should display a different test title ', () => {
    h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toEqual('All Candidates list');
  });


  it('should API is not null', inject([AllresultService], async (myService: AllresultService) => {
    const result = await myService.seeAllCandidates()
    expect(result).not.toBeNull()
  })
  )


});
