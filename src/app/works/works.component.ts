import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  workings;
  hover;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.workings = this.dataService.workPage;

  }
  routeto(item) {
    this.router.navigate(['work'], { queryParams: { item } });
  }
  routetopage(page){
    this.router.navigate([page]);
  }
}
