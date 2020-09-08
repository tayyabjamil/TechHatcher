import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Data Services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }
  routeToServices(item) {
    this.router.navigate(['/service'], { queryParams: { page: item.id } });
 

  }
  routetopage(page){
    this.router.navigate([page]);
    window.scrollTo(0, 0);
  }

}
