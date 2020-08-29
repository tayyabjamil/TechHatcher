import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data Services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workDetail',
  templateUrl: './workDetail.component.html',
  styleUrls: ['./workDetail.component.scss']
})
export class WorkDetailComponent implements OnInit {

  sub: any;
  items
  data;
  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.sub = this.route.queryParams
    .subscribe(params => {
      this.items = params.item;

    })
    this.data = this.dataService.getWorkByTitle(this.items)[0];
    console.log(this.items)
      window.scrollTo(0, 0);
  }
  routetopage(page){
    this.router.navigate([page]);
    window.scrollTo(0, 0);

  }

}
