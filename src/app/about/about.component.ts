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
  data;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.companyProfile = this.dataService.company;
    this.data = this.dataService.POS;
  }
  routeToServices(item) {
    this.router.navigate(['/about'], { queryParams: { page: item.id } });


  }
  routetopage(page){
    this.router.navigate([page]);
    window.scrollTo(0, 0);
  }
}
