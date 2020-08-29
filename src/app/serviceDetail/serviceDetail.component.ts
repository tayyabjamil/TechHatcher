import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../Data Services/data.service';

@Component({
  selector: 'app-serviceDetail',
  templateUrl: './serviceDetail.component.html',
  styleUrls: ['./serviceDetail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
  
  sub: any;
  items
  page;
  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.sub = this.route.queryParams
      .subscribe(params => {
        this.page = +params['page'] || 0;
        this.items = this.dataService.getSingleItem(this.page);
      });

  }

}
