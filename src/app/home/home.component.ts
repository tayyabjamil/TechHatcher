import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data Services/data.service';
import { Router } from '@angular/router';
import { FacebookService, InitParams } from 'ngx-facebook';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
workhome;
  data;
  workings;
  heading;
  description;
animation = 'tu-color-animation'

  constructor(private dataService: DataService, private router: Router,private facebookService: FacebookService ) { }

  ngOnInit() {
    this.initFacebookService();
    this.data = this.dataService.home;
    this.workings = this.dataService.workPage;
    this.heading = this.data.headerSection.tittle;
    this.description = this.data.headerSection.description;
    this.workings = this.dataService.workPage;
    

  }
  private initFacebookService(): void {
    const initParams: InitParams = { xfbml:true, version:'v3.2'};
    this.facebookService.init(initParams);
  }
  routetopage(page){
    this.router.navigate([page]);
  }
  
}
