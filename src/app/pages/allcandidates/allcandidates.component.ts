import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AllresultService } from '../../services/allresult/allresult.service';
import { ToastrService } from 'ngx-toastr';


export interface UserData {
  id: string;
  skill_set: string;
  candidate_name: string;
  test_date: string;
  points: string;
  result: string;
}

@Component({
  selector: 'app-allcandidates',
  templateUrl: './allcandidates.component.html',
  styleUrls: ['./allcandidates.component.scss']
})
export class AllcandidatesComponent implements OnInit {


  displayedColumns: string[] = ['position_applied_for', 'candidate_name', 'experience', 'email', 'mobile', 'result'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('filter', {static: false}) filter!: ElementRef;

  constructor(private _allresultService: AllresultService, public _toster: ToastrService) {
  }



  seeAllResult: any;

  ngOnInit(): void {

    this._allresultService.seeAllCandidates().subscribe((res: any) => {
      this.seeAllResult = res;
      // console.log('all candidates', this.seeAllResult)
      let reverses = this.seeAllResult?.Candidates.reverse()
      this.dataSource = new MatTableDataSource(reverses);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {
      this._toster.error(error, 'data not found', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'decreasing'
      });
    })

    // this.dataSource.filterPredicate = (data:
    //   { name: string }, filterValue: string) =>
    //   data.name.trim().toLowerCase().indexOf(filterValue) !== -1;

  }

  // applyFilter(filterValue: any) {
  //   let s = filterValue.target.value
  //   this.dataSource.filter = s.trim().toLowerCase();
  // }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator
  // }
  
    filterTable (filterValue :any) { 
      let fil = filterValue.target.value
      return this.dataSource.filter = fil.trim().toLowerCase(); 
    }

}
