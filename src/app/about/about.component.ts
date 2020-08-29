import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Data Services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  companyProfile;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.companyProfile = this.dataService.company;
  }
  routetopage(page) {
    this.router.navigate([page]);
    window.scrollTo(0, 0);
  }

}
