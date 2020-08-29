import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsFeed',
  templateUrl: './newsFeed.component.html',
  styleUrls: ['./newsFeed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  routetopage(page){
    this.router.navigate([page]);
    window.scrollTo(0, 0);
  }

}
