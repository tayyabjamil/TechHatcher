import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  data ;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.technology;
  }
  routetopage(page){
    this.router.navigate([page]);
  }
}
